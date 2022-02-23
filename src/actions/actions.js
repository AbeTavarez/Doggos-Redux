import axios from "axios";

// Doggo actions
export const FETCH_DOG_START = "FETCH_DOG_START";
export const FETCH_DOG_COMPLETE = "FETCH_DOG_COMPLETE";
export const FETCH_DOG_FAIL = "FETCH_DOG_FAIL";

// favorite actions
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// export const  actionsName = (params) => (dispatch => {})
export const addFavorite = (dog) => dispatch => {
    dispatch({type: ADD_FAVORITE, payload: dog})
}

export const removeFavorite = (dog) => dispatch => {
    dispatch({type: REMOVE_FAVORITE, payload: dog})
}

export const fetchDoggos = () => async dispatch => {
    dispatch({type: FETCH_DOG_START})

    try {
        const data = await axios.get('https://dog.ceo/api/breeds/image/random/12');
        dispatch({type: FETCH_DOG_COMPLETE, payload: data.data.message})
    } catch (err) {
        dispatch({type: FETCH_DOG_FAIL, payload: err.message})
    }
}