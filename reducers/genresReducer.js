const initialState = {
  selectedGenre: [],
};

//reducer
const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_GENRE":
      if (!state.selectedGenre.includes(action.payload)) {
        return {
          ...state,
          selectedGenre: [...state.selectedGenre, action.payload],
        };
      }
      return state;
    case "REMOVE_GENRE":
      if (state.selectedGenre.includes(action.payload)) {
        return {
          ...state,
          selectedGenre: state.selectedGenre.filter((item) => item !== action.payload),
        };
      }
      return state;

    default:
      return state;
  }
};
