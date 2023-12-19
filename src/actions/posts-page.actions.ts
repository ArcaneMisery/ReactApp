import { PostModel } from "../core-module/models/posts-models";

export const SET_FILTER = "SET_FILTER";
export const GET_POSTS_BY_PAGE = "GET_POSTS_BY_PAGE";
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";
export const SET_ACTIVE_POST = "SET_ACTIVE_POST";
export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";



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
        .then((responce) => responce.json())
        .then((responce) => {
            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: responce
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

export function setActivePost(post: PostModel) {
    return (dispatch: any) => {
        dispatch({
            type: SET_ACTIVE_POST,
            payload: post
        });
        dispatch({
            type: GET_COMMENTS_REQUEST
        });
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then((responce) => responce.json())
        .then((responce) => {
            dispatch({
                type: GET_COMMENTS_SUCCESS,
                payload: responce
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_COMMENTS_ERROR,
                payload: error
            });
        });
    }
}
