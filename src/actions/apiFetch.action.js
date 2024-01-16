import axios from "axios";
import { couleursGenresFilm } from "../styles/globalStyles";
import { shownGenresFilm } from "../styles/globalStyles";
export const SET_STATIC_DATA_POPULAR_MOVIE_LIST = "SET_STATIC_DATA_POPULAR_MOVIE_LIST";
export const SET_STATIC_DATA_TOP_RATED_MOVIE_LIST = "SET_STATIC_DATA_TOP_RATED_MOVIE_LIST";
export const SET_FILTER_LIST_GENRES = "SET_FILTER_LIST_GENRES";

const tMDBoptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_API_HEADERS_AUTHORIZATION,
  },
};

export const fetchGenrelist = () => {
  return (dispatch) => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?language=fr", tMDBoptions)
      .then((response) => {
        //push des couleurs en fonction des genres - contient maintenant ID Name et color EG. 7: {id: 10751, name: 'Familial', color: '#36ea42'}
        // push de selected et displayed en fonction des genres - Displayed depend de la constante dans globalStyles.js
        const updatedResponse = response.data.genres.map((genre, index) => ({
          ...genre,
          color: couleursGenresFilm[index],
          selected: false,
          displayed: shownGenresFilm.includes(genre.name) ? true : false,
        }));
        dispatch({ type: SET_FILTER_LIST_GENRES, payload: updatedResponse });
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: SET_FILTER_LIST_GENRES,
          payload: [],
        });
      });
  };
};

export const fetchPopularMovieList = () => {
  return (dispatch) => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1", tMDBoptions)
      .then((response) => {
        const moviesListData = response.data.results.map((movie) => {
          return {
            ...movie,
            listName: "Les films les plus populaires en France en ce moment",
          };
        });
        dispatch({ type: SET_STATIC_DATA_POPULAR_MOVIE_LIST, payload: moviesListData });
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: SET_STATIC_DATA_POPULAR_MOVIE_LIST,
          payload: [],
        });
      });
  };
};

export const fetchTopRatedMovieList = () => {
  return (dispatch) => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", tMDBoptions)
      .then((response) => {
        const moviesListData = response.data.results.map((movie) => {
          return {
            ...movie,
            listName: "Les meilleurs films de tous les temps",
          };
        });
        dispatch({ type: SET_STATIC_DATA_TOP_RATED_MOVIE_LIST, payload: moviesListData });
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: SET_STATIC_DATA_TOP_RATED_MOVIE_LIST,
          payload: [],
        });
      });
  };
};
