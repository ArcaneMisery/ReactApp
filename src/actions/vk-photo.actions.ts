export const SET_YEAR = "SET_YEAR";
export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";

export function setYear(year: string) {
    return {
        type: SET_YEAR,
        payload: year,
    }
}

export function getPhotos(year: string) {
    return (dispatch: any) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        });
        dispatch({
            type: SET_YEAR,
            payload: year
        });
        setTimeout(() => {
            dispatch({
              type: GET_PHOTOS_SUCCESS,
              payload: [1, 2, 3, 4, 5],
            });
          }, 1000);
    };
}