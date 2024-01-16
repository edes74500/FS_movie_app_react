export const ADD_FAV_MOVIES_LIST = "ADD_FAV_MOVIES_LIST";
export const REMOVE_FAV_MOVIES_LIST = "REMOVE_FAV_MOVIES_LIST";

export const toogleFavMoviesList = (movieInfo) => {
  return (dispatch, getState) => {
    const { favMoviesList } = getState();
    const movieInFav = favMoviesList.find((movie) => movie.id === movieInfo.id);
    // const targetID = e.currentTarget.id;
    if (movieInFav)
      dispatch({
        type: REMOVE_FAV_MOVIES_LIST,
        payload: movieInFav.id,
      });
    else
      dispatch({
        type: ADD_FAV_MOVIES_LIST,
        payload: movieInfo,
      });
  };
};

//   });
//     if (favMoviesList.) {
//       dispatch({
//         type: REMOVE_FAV_MOVIES_LIST,
//         payload: movieInfo.id,
//       });
//     } else {
//       dispatch({
//         type: ADD_FAV_MOVIES_LIST,
//         payload: movieInfo,

// else if (movie.id !== movieInfo.id) {
//         console.log("fav added " + movieInfo.title);
//         dispatch({
//           type: ADD_FAV_MOVIES_LIST,
//           payload: movieInfo,
//         });
//       }
