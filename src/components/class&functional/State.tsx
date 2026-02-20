import { View, Button } from 'react-native';
import React, { FC, useState } from 'react';
/* The React useState Hook allows us to track state in a function component. */
const State: FC = () => {
  const [bgColor, setBgColor] = useState('red');
  console.log(bgColor);
  const handleBackground = () => {
    setBgColor('green');
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <View style={{ width: 100, height: 100, backgroundColor: bgColor }} />
      <Button title="Change Background" onPress={() => handleBackground()} />
    </View>
  );
};

export default State;
