// import { UPDATE_STATIC_DATA_GENRE_LIST } from "../actions/genreList.action";
import {
  SET_FILTER_LIST_GENRES,
  SET_STATIC_DATA_POPULAR_MOVIE_LIST,
  SET_STATIC_DATA_TOP_RATED_2000_MOVIE_LIST,
} from "../actions/apiFetch.action";
import { SET_STATIC_DATA_TOP_RATED_MOVIE_LIST } from "../actions/apiFetch.action";
import { ADD_FAV_MOVIES_LIST, REMOVE_FAV_MOVIES_LIST, DISPLAY_FAV_MESSAGE } from "../actions/favList.action";
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
  voteCount: {
    min: 10000,
  },
  popularity: {
    min: 0,
  },
  voteAverage: {
    min: 0,
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

    case SET_STATIC_DATA_TOP_RATED_2000_MOVIE_LIST:
      return {
        ...state,
        top_rated_2000: action.payload,
      };
    default:
      return state;
  }
};

const favMoviesListInitialState = {
  list: localStorage.getItem("favMoviesList") ? JSON.parse(localStorage.getItem("favMoviesList")) : [],
  displayedMessage: null,
};

export const favMoviesList = (state = favMoviesListInitialState, action) => {
  switch (action.type) {
    case DISPLAY_FAV_MESSAGE:
      return { ...state, displayedMessage: action.payload };

    // toLocaleStorage(action.payload);
    // return action.payload;
    case ADD_FAV_MOVIES_LIST:
      // toLocaleStorage(action.payload);
      return { ...state, list: [...state.list, action.payload] };
    case REMOVE_FAV_MOVIES_LIST:
      // toLocaleStorage(action.payload);
      return {
        ...state,
        list: state.list.filter((movie) => movie.id !== action.payload),
      };

    // state.list.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};
