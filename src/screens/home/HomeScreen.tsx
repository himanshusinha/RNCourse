import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from '../../components/MyButton/MyButton';
import styles from './styles';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyButton
        title="Press Me"
        onPress={() => console.log('Press')}
        style={styles.button}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
