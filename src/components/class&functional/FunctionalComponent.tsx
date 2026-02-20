import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
/*
Functional Component:
A functional component is a JavaScript function that returns JSX
and can use Hooks to manage state and other React features.
*/
const FunctionalComponent: FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increaseCounter = (): void => {
    setCounter(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={increaseCounter}>
        Counter: {counter}
      </Text>
    </View>
  );
};

export default FunctionalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
