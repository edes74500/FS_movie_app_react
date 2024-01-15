import axios from "axios";

export const SET_FETCH_SEARCH_RESULT = "SET_FETCH_SEARCH_RESULT";

const tMDBoptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_API_HEADERS_AUTHORIZATION,
  },
};

export const fetchSearchResults = (inputSearchValue) => {
  if (inputSearchValue !== null && inputSearchValue !== undefined) {
    return (dispatch) => {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${inputSearchValue}&include_adult=true&language=fr-FR&page=1`,
          tMDBoptions
        )
        .then((res) => {
          const results = res.data.results;
          dispatch({ type: SET_FETCH_SEARCH_RESULT, payload: results });
        });
    };
  } else {
    // Si l'inputSearchValue est vide ou null, vous pouvez gérer cela ici, par exemple, en réinitialisant les résultats
    return (dispatch) => {
      dispatch({ type: SET_FETCH_SEARCH_RESULT, payload: [{}] }); // Réinitialisation des résultats
    };
  }
};
