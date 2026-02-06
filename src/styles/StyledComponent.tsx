import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { StyledContainer, StyledCustomText } from './styled';

const StyledComponent: FC = () => {
  return (
    <StyledContainer>
      <StyledCustomText color="white">Primary</StyledCustomText>
      <StyledCustomText color="yellow">Secondary</StyledCustomText>
    </StyledContainer>
  );
};

export default StyledComponent;
