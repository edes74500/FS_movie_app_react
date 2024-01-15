import { UPDATE_STATIC_DATA_GENRE_LIST } from "../actions/genreList.action";

const genreInitialState = [
  {
    id: 0,
    name: "",
    color: "",
    selected: false,
    displayed: false,
  },
];

export const genreList = (state = genreInitialState, action) => {
  switch (action.type) {
    case UPDATE_STATIC_DATA_GENRE_LIST:
      return action.payload;
    default:
      return state;
  }
};
