// import axios from "axios";
// import { couleursGenresFilm } from "../styles/globalStyles";
// import { shownGenresFilm } from "../styles/globalStyles";

// export const UPDATE_STATIC_DATA_GENRE_LIST = "UPDATE_STATIC_DATA_GENRE_LIST";
// export const SORT_STATIC_DATA_GENRE_LIST = "SORT_STATIC_DATA_GENRE_LIST";

// const tMDBoptions = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: import.meta.env.VITE_API_API_HEADERS_AUTHORIZATION,
//   },
// };

// // export const fetchGenrelist = () => {
// //   return (dispatch) => {
// //     axios
// //       .get("https://api.themoviedb.org/3/genre/movie/list?language=fr", tMDBoptions)
// //       .then((response) => {
// //         //push des couleurs en fonction des genres - contient maintenant ID Name et color EG. 7: {id: 10751, name: 'Familial', color: '#36ea42'}
// //         // push de selected et displayed en fonction des genres - Displayed depend de la constante dans globalStyles.js
// //         const updatedResponse = response.data.genres.map((genre, index) => ({
// //           ...genre,
// //           color: couleursGenresFilm[index],
// //           selected: false,
// //           displayed: shownGenresFilm.includes(genre.name) ? true : false,
// //         }));
// //         dispatch({ type: UPDATE_STATIC_DATA_GENRE_LIST, payload: updatedResponse });
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //         dispatch({
// //           type: UPDATE_STATIC_DATA_GENRE_LIST,
// //           payload: [],
// //         });
// //       });
// //   };
// // };

// export const sortGenreList = () => {
//   return (dispatch, getState) => {
//     const { filtersList } = getState();
//     // const sortedGenreList = [...genreList]; // Créez une copie de la liste pour éviter de modifier l'original
//     const sortedGenreList = filtersList.genres.slice().sort((a, b) => b.selected - a.selected); // Triez la liste copiée
//     dispatch({ type: UPDATE_STATIC_DATA_GENRE_LIST, payload: sortedGenreList });
//   };
// };

// export const updateGenreList = (e) => {
//   return (dispatch, getState) => {
//     const { filtersList } = getState();

//     const updatedDataGenres = filtersList.genres.map((genre) => {
//       if (genre.id == Number(e.currentTarget.id)) {
//         return { ...genre, selected: !genre.selected };
//       } else {
//         return genre;
//       }
//     });

//     dispatch({ type: UPDATE_STATIC_DATA_GENRE_LIST, payload: updatedDataGenres });
//   };
// };

// export const resetGenreList = () => {
//   return (dispatch, getState) => {
//     const { filtersList } = getState();

//     const resetData = filtersList.genres.map((genre) => ({ ...genre, selected: false }));
//     dispatch({ type: UPDATE_STATIC_DATA_GENRE_LIST, payload: resetData });
//   };
// };
