import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FETCH_DOG_COMPLETE,
  FETCH_DOG_FAIL,
  FETCH_DOG_START,
} from "../actions/actions";

const initialState = {
  doggosList: [],
  isLoading: false,
  error: "",
  favorites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      console.log(action.payload);
      // spread state and grab the piece that you need to change
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case REMOVE_FAVORITE:
      let newState = state.favorites.filter((dog) => dog !== action.payload);
      return {
        ...state.favorites,
        favorites: [newState],
      };
    case FETCH_DOG_START:
      return {
          ...state,
        doggosList: [],
        isLoading: true,
      };
    case FETCH_DOG_COMPLETE:
      return {
        ...state,
        isLoading: false,
        doggosList: action.payload,
        error: "",
      };
    case FETCH_DOG_FAIL:
      return {
        ...state.isLoading,
        isLoading: false,
        ...state.error,
        error: action.payload,
      };
    default:
      return state;
  }
};
