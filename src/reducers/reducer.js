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
      // spread state and grab the piece that you need, grab the key
      return {
        ...state.favorites,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      let newState = state.favorites.filter((dog) => dog !== action.payload);
      return {
        ...state.favorites,
        favorites: [newState],
      };
    case FETCH_DOG_START:
      return {
        ...state.isLoading,
        doggosList: [],
        isLoading: true,
      };
    case FETCH_DOG_COMPLETE:
      return {
        ...state,
        isLoading: false,
        doggosList: action.payload,
        error: ""
      };
    case FETCH_DOG_FAIL:
      return {
        ...state.doggoState.isLoading,
        isLoading: false,
        ...state.doggoState.error,
        error: action.payload,
      };
    default:
      return state;
  }
};
