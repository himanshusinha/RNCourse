import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const FlexBox = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row-reverse',
      }}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>2</Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>3</Text>
      </View>
    </SafeAreaView>
  );
};

export default FlexBox;
