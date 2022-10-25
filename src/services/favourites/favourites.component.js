import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FavouritesContex} from './favourites.contex';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favourites = ({restaurant}) => {
  const {favourites, addToFavourites, removeFromFavourites} =
    useContext(FavouritesContex);

  const isFavourite = favourites.find(r => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant)
      }>
      <Ionicons
        name={isFavourite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};

export default Favourites;
