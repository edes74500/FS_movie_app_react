// import { UPDATE_STATIC_DATA_GENRE_LIST } from "../actions/genreList.action";
import { SET_FILTER_LIST_GENRES, SET_STATIC_DATA_POPULAR_MOVIE_LIST } from "../actions/apiFetch.action";
import { SET_STATIC_DATA_TOP_RATED_MOVIE_LIST } from "../actions/apiFetch.action";
import {
  RESET_FILTER_LIST_YEARS,
  UPDATE_FILTER_LIST_GENRES,
  UPDATE_FILTER_LIST_YEARS,
} from "../actions/filterList.action";

const genreInitialState = [{ id: 10751, name: "Familial", color: "#36ea42", displayed: true, selected: false }];

const staticMoviesListInitialState = [];

const filtersListInitialState = {
  genres: genreInitialState,
  years: {
    start: 1900,
    end: 2024,
  },
};

export const filtersList = (state = filtersListInitialState, action) => {
  switch (action.type) {
    case SET_FILTER_LIST_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case UPDATE_FILTER_LIST_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case RESET_FILTER_LIST_YEARS:
      return {
        ...state,
        years: filtersListInitialState.years,
      };
    case UPDATE_FILTER_LIST_YEARS:
      return {
        ...state,
        years: action.payload,
      };
    default:
      return state;
  }
};

export const staticMoviesList = (state = staticMoviesListInitialState, action) => {
  switch (action.type) {
    case SET_STATIC_DATA_POPULAR_MOVIE_LIST:
      return {
        ...state,
        popular: action.payload,
      };
    case SET_STATIC_DATA_TOP_RATED_MOVIE_LIST:
      return {
        ...state,
        top_rated: action.payload,
      };
    default:
      return state;
  }
};
