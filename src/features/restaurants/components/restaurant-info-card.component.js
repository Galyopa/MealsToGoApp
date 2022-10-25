import React from 'react';

import Star from '../../../../assets/icons/star.svg';
import Open from '../../../../assets/icons/open.svg';

import {Spacer} from '../../../components/spacer.component';
import {Text} from '../../../components/typography/text.component';

import {
  Address,
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
  Info,
  Rating,
} from './restaurant-info-card.styles';
import {View} from 'react-native';
import Favourites from '../../../services/favourites/favourites.component';

const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '1001 street New York',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = new Array(Math.floor(rating)).fill(rating);

  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourites restaurant={restaurant} />
        <RestaurantCardCover source={{uri: photos[0]}} />
      </View>
      <Info>
        <Text>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <Star width={20} height={20} key={`star-${placeId}-${index}`} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer margin={'left'} size="large">
              {isOpenNow && <Open width={20} height={20} />}
            </Spacer>
            <Spacer margin={'left'} size="large" />
            <Icon source={{uri: icon}} />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
