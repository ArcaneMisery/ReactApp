

import { combineReducers } from 'redux';
import { vkPhotoReducer } from './vk-photo.reducer';
import { authReducer } from './auth.reducer';
import { postsPageReducer } from './posts-page.reducer';

export const rootReducer = combineReducers({
    VkPhotoReducer: vkPhotoReducer,
    authReducer: authReducer,
    postsPageReducer: postsPageReducer
})
