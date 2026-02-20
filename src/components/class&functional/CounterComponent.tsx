import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

const CounterComponent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /* 
useEffect is used to handle side effects like API calls, subscriptions, timers, and DOM updates in functional components.
  */

  useEffect(() => {
    console.log('every time');
  }); // every time
  useEffect(() => {
    console.log('one time');
  }, []); // mount run one time
  useEffect(() => {
    console.log('run once only counter1 value changes');
  }, [counter1]); // run only counter1 value changes
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Counter : {counter1}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#0096FF',
          marginBottom: 20,
          padding: 10,
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => setCounter1(counter1 + 1)}
      >
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#0096FF',
          marginBottom: 20,
          padding: 10,
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => setCounter1(counter1 - 1)}
      >
        <Text>Decrease</Text>
      </TouchableOpacity>

      <Text>Counter : {counter2}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#0096FF',
          marginBottom: 20,
          padding: 10,
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => setCounter2(counter2 + 1)}
      >
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#0096FF',
          marginBottom: 20,
          padding: 10,
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => setCounter2(counter2 - 1)}
      >
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterComponent;
