import { View, Text } from 'react-native';
import React, { FC } from 'react';
import styles from './CommonStyles';

const CommanStylesDemo: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CommanStylesDemo</Text>
    </View>
  );
};

export default CommanStylesDemo;
