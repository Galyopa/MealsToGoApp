import React from 'react';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import {Platform} from 'react-native';

import {Text} from '../../../components/typography/text.component';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  border-radius: 10px;
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

const CompactRestaurantInfo = ({restaurant, isMap}) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image
        source={{uri: restaurant.photos[0]}}
        containerStyle={{borderRadius: 10}}
      />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
