import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Text, View } from 'react-native';

const data = [
  'very very long text',
  'long text',
  'demo text',
  'demo flex wrap  text list',
];

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                borderColor: 'black',
                backgroundColor: 'orange',
                margin: 10,
                padding: 10,
              }}
            >
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

// flexDirection → main axis decide karta hai (row ya column)

// justifyContent → main axis ke along children ko align karta hai

// alignItems → cross axis ke along children ko align karta hai

// alignSelf → specific child ko cross axis me align karta hai

// flexWrap → children ko next line me wrap hone deta hai
