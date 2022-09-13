import { configureStore } from "@reduxjs/toolkit";

import FavoritesReducer from "./favoritesSlice";

const store = configureStore({
  reducer: {
    favoriteMeals: FavoritesReducer,
  },
});

export default store;
