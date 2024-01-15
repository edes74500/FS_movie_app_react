import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./src/reducers"; // Importez vos reducers ici
import movieReducer from "./src/reducers/movieReducer";
const store = configureStore({
  reducer: {
    movies: movieReducer,
    // Vous pouvez ajouter d'autres réducteurs ici si nécessaire
  },
});

export default store;
