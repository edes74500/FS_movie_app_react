import { SET_FETCH_SEARCH_RESULT } from "../actions/fetchSearchResults.action";
import { SET_INPUT_SEARCH_VALUE } from "../actions/searchValue.action";

const initialState = {
  searchValue: "",
  searchFetchResult: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_INPUT_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SET_FETCH_SEARCH_RESULT:
      return {
        ...state,
        searchFetchResult: action.payload,
      };
    default:
      return state;
  }
}
