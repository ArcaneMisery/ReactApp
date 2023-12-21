import { PostModel } from "../core-module/models/posts-models";

export const SET_FILTER = "SET_FILTER";
export const GET_POSTS_BY_PAGE = "GET_POSTS_BY_PAGE";
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";
export const GET_POST_REQUEST = "GET_POSTS_REQUEST";
export const GET_POST_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POST_ERROR = "GET_POSTS_ERROR";
export const SET_ACTIVE_POST = "SET_ACTIVE_POST";
export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";



export function setFilter(filter: {page: number}) {
    return (dispatch: any) => {
        dispatch({
            type: SET_FILTER,
            payload: filter
        });
        setTimeout(() => {
            dispatch({
                type: GET_POSTS_BY_PAGE,
                payload: filter.page
            });
        }, 150)
    }
}

export function getPosts() {
    return (dispatch: any) => {
        dispatch({
            type: GET_POSTS_REQUEST,
        });
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((response) => {
            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: response
            });

            dispatch({
                type: SET_FILTER,
                payload: {page: 1}
            });

            dispatch({
                type: GET_POSTS_BY_PAGE,
                payload: 1
            });
            setFilter({page: 1});
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export function getPostById(id: number) {
    return (dispatch: any) => {
        dispatch({
            type: GET_POST_REQUEST
        });

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((response) => {
            dispatch({
                type: GET_POST_SUCCESS,
                payload: response
            });
            dispatch({
                type: SET_ACTIVE_POST,
                payload: response
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: GET_POST_ERROR
            });
        })

    }
}

export function setActivePost(post: PostModel) {
    return (dispatch: any) => {
        dispatch({
            type: SET_ACTIVE_POST,
            payload: post
        });
    }
}

export function getComments(id: number) {
    return (dispatch: any) => {
        dispatch({
            type: GET_COMMENTS_REQUEST
        });
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: GET_COMMENTS_SUCCESS,
                    payload: response
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_COMMENTS_ERROR,
                    payload: error
                });
            });
        }, 1000)
    }
}

export function clearComments() {
    return (dispatch: any) => {
        dispatch({
            type: CLEAR_COMMENTS
        });
    }
}
