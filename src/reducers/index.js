import { combineReducers } from "redux";
import searchInput from "./searchInput.reducer";
import { genreList } from "./staticData.reducer";
// import { updateGenreListtest } from "./genres.reducer";

export default combineReducers({
  searchInput,
  genreList,
  //   updateGenreListtest,
});
