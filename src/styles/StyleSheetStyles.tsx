import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

const StyleSheetStyles: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheetStyles</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});
export default StyleSheetStyles;
