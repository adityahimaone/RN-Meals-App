import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealID, setFavoriteMealID] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealID((prevData) => [...prevData, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealID((prevData) => prevData.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favoriteMealID,
    addFavorite,
    removeFavorite,
  };

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
