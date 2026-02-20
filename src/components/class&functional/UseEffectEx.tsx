import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
/* 
useEffect is used to handle side effects like API calls, subscriptions, timers, and DOM updates in functional components.

[] → Runs only once (on mount)

[value] → Runs when value changes

No array → Runs on every render

*/


const UseEffectEx = () => {
  return (
    <View>
      <Text>UseEffectEx</Text>
    </View>
  );
};

export default UseEffectEx;
