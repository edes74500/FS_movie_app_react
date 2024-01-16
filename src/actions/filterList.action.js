export const UPDATE_FILTER_LIST_YEARS = "UPDATE_FILTER_LIST_YEARS";
export const UPDATE_FILTER_LIST_GENRES = "UPDATE_FILTER_LIST_GENRES";
export const RESET_FILTER_LIST_YEARS = "RESET_FILTER_LIST_YEARS";

export const updateFilterListGenres = (e) => {
  return (dispatch, getState) => {
    const { filtersList } = getState();

    const updatedDataGenres = filtersList.genres.map((genre) => {
      if (genre.id == Number(e.currentTarget.id)) {
        return { ...genre, selected: !genre.selected };
      } else {
        return genre;
      }
    });

    dispatch({ type: UPDATE_FILTER_LIST_GENRES, payload: updatedDataGenres });
  };
};

export const sortFilterListGenres = () => {
  return (dispatch, getState) => {
    const { filtersList } = getState();
    // const sortedGenreList = [...genreList]; // Créez une copie de la liste pour éviter de modifier l'original
    const sortedGenreList = filtersList.genres.slice().sort((a, b) => b.selected - a.selected); // Triez la liste copiée
    dispatch({ type: UPDATE_FILTER_LIST_GENRES, payload: sortedGenreList });
  };
};

export const resetFilterListGenres = () => {
  return (dispatch, getState) => {
    const { filtersList } = getState();

    const resetData = filtersList.genres.map((genre) => ({ ...genre, selected: false }));
    dispatch({ type: UPDATE_FILTER_LIST_GENRES, payload: resetData });
  };
};

export const resetFilterListYears = () => {
  return (dispatch) => {
    dispatch({ type: RESET_FILTER_LIST_YEARS, payload: { start: 1900 } });
  };
};

export const updateFilterListYears = (start, end) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_FILTER_LIST_YEARS,
      payload: { start, end },
    });
  };
};
