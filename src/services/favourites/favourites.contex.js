import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContex = createContext();

const FavouritesContexProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async value => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem('@favourites', jsonValue);
    } catch (error) {
      console.log('error storing', error);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favourites');

      if (jsonValue !== null) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log('error loading', error);
    }
  };

  const addToFavourites = restaurant =>
    setFavourites([...favourites, restaurant]);

  const removeFromFavourites = restaurant => {
    const filtredFavourites = favourites.filter(
      rest => rest.placeId !== restaurant.placeId,
    );

    setFavourites(filtredFavourites);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContex.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}>
      {children}
    </FavouritesContex.Provider>
  );
};

export default FavouritesContexProvider;
