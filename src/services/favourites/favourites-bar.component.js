import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Spacer} from '../../components/spacer.component';
import {Text} from '../../components/typography/text.component';
import CompactRestaurantInfo from '../../features/restaurants/components/compact-restaurant-info.component';

const FavouritesWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const FavouritesBar = ({favourites, onNavigate}) => {
  if (!favourites.length) {
    return null;
  }

  const Item = ({item}) => {
    return (
      <Spacer margin="right" size="large">
        <TouchableOpacity
          onPress={() =>
            onNavigate('RestaurantDetail', {
              restaurant: item,
            })
          }>
          <CompactRestaurantInfo restaurant={item} />
        </TouchableOpacity>
      </Spacer>
    );
  };

  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={favourites}
        renderItem={Item}
        keyExtractor={res => res.name}
      />
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
