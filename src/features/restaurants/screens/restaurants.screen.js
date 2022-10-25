import React, {useContext, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import {Spacer} from '../../../components/spacer.component';
import SafeArea from '../../../components/utility/safe-area.component';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.contex';
import {ActivityIndicator, Colors} from 'react-native-paper';
import Search from '../components/search.component';
import FavouritesBar from '../../../services/favourites/favourites-bar.component';
import {FavouritesContex} from '../../../services/favourites/favourites.contex';

const sizeLoading = 50;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -${sizeLoading / 2}px;
`;

export const RestaurantsScreen = ({navigation}) => {
  const {isLoading, restaurants} = useContext(RestaurantsContext);
  const {favourites} = useContext(FavouritesContex);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={sizeLoading} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', {
                restaurant: item,
              })
            }>
            <Spacer margin={'bottom'} size={'large'}>
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
