import { View, Text } from 'react-native';
import React, { FC } from 'react';

const InlineStyles: FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>InlineStyles Demo</Text>
    </View>
  );
};

export default InlineStyles;
