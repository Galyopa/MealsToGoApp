import React from 'react';

import styled, {useTheme} from 'styled-components/native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (margin, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const value = theme.space[sizeIndex];
  const property = positionVariant[margin];

  return `${property}: ${value}`;
};

const SpacerView = styled.View`
  ${({variant}) => variant}
`;

export const Spacer = ({margin, size, children}) => {
  const theme = useTheme();

  const variant = getVariant(margin, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  margin: 'top',
  size: 'small',
};
