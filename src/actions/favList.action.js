import { useRef } from "react";

export const ADD_FAV_MOVIES_LIST = "ADD_FAV_MOVIES_LIST";
export const REMOVE_FAV_MOVIES_LIST = "REMOVE_FAV_MOVIES_LIST";
export const DISPLAY_FAV_MESSAGE = "DISPLAY_FAV_MESSAGE";
// import { GetState } from "@reduxjs/toolkit";
// import getState

export const toogleFavMoviesList = (movieInfo) => {
  return (dispatch, getState) => {
    const { favMoviesList } = getState();
    const movieInFav = favMoviesList.list.find((movie) => movie.id === movieInfo.id);
    // const targetID = e.currentTarget.id;
    if (movieInFav) {
      dispatch({
        type: REMOVE_FAV_MOVIES_LIST,
        payload: movieInFav.id,
      });
      // dispatch(displayFavMessage());
    } else {
      dispatch({
        type: ADD_FAV_MOVIES_LIST,
        payload: movieInfo,
      });
      // dispatch(displayFavMessage());
    }
    const updatedFavMoviesList = getState().favMoviesList.list;
    localStorage.setItem("favMoviesList", JSON.stringify(updatedFavMoviesList));
  };
};

// export const toLocaleStorage = (fav) => {
//   localStorage.setItem("favMoviesList", JSON.stringify(fav));
// };

export const displayFavMessage = (message) => {
  // console.log(message);
  return (dispatch) => {
    dispatch({
      type: DISPLAY_FAV_MESSAGE,
      payload: message,
    });
  };
};
