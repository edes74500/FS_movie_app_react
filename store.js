import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Importez vos reducers ici

const store = configureStore({
  reducer: rootReducer,
  // Vous pouvez ajouter d'autres configurations ici si nécessaire
});

const initialState = {
  selectedGenre: [],
};

export default store;
