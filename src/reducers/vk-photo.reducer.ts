import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, SET_YEAR } from "../actions/vk-photo.actions";


const initialState = {
    year: 2018,
    photos: [],
    pending: false,
};
  
export function vkPhotoReducer(state = initialState, action: {type: string; payload: any}) {
    switch (action.type) {
      case SET_YEAR: return {...state, year: action.payload};
      case GET_PHOTOS_REQUEST: return {
        ...state,
        pending: true
      };
      case GET_PHOTOS_SUCCESS: return {
        ...state,
        photos: action.payload,
        pending: false
      }
      default: return state;
  }
}

  