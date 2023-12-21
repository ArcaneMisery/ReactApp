import { CLEAR_COMMENTS, GET_COMMENTS_ERROR, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_POSTS_BY_PAGE, GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POST_REQUEST, GET_POST_SUCCESS, SET_ACTIVE_POST, SET_FILTER } from "../actions/posts-page.actions";
import { CommentModel, PostModel } from "../core-module/models/posts-models";

export interface PostPageStateModel {
    posts: PostModel[];
    postsByPage: PostModel[];
    filter: null | {page: number};
    activePost: null | PostModel;
    comments: CommentModel[] | null,
    pending: boolean;
}

const initialState: PostPageStateModel = {
    posts: [],
    postsByPage: [],
    filter: null,
    activePost: null,
    comments: null,
    pending: false,
}

export function postsPageReducer(state = initialState, action: {type: string, payload: any}) {
    switch(action.type) {
        case SET_FILTER: return {
            ...state,
            filter: action.payload,
            pending: true
        };
        case GET_POSTS_REQUEST:
        case GET_POST_REQUEST:
        case GET_COMMENTS_REQUEST: return {
            ...state,
            pending: true
        };
        case GET_POSTS_SUCCESS: return {
            ...state,
            posts: action.payload,
            pending: false,
        }
        case GET_POSTS_ERROR: return {
            ...state,
            pending: false
        }
        case GET_POST_SUCCESS: return {
            ...state,
            // pending: false
        }
        case GET_POSTS_BY_PAGE: return {
            ...state,
            postsByPage: state.posts.slice(0, action.payload * 20),
            pending: false
        }
        case SET_ACTIVE_POST: return {
            ...state,
            activePost: action.payload
        }
        case GET_COMMENTS_SUCCESS: return {
            ...state,
            comments: action.payload,
            pending: false
        }
        case GET_COMMENTS_ERROR: return {
            ...state,
            comments: null,
            pending: false
        }
        case CLEAR_COMMENTS: return {
            ...state,
            comments: null
        }
        default: return state;
    }
}
