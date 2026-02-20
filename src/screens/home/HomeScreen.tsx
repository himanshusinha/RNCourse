import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { ClassComponent } from '../../components/class&functional/ClassComponent';
import FunctionalComponent from '../../components/class&functional/FunctionalComponent';
import State from '../../components/class&functional/State';
import CounterComponent from '../../components/class&functional/CounterComponent';
import CategoriesDemo from '../../components/Hooks/demo/CategoriesDemo';
import OrientationListener from '../../components/Hooks/demo/ListenersDemo';
import TimersDemo from '../../components/Hooks/demo/TimersDemo';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HooksTopicsScreen /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
      {/* <State /> */}
      {/* <CounterComponent /> */}
      {/* <CategoriesDemo /> */}
      {/* <OrientationListener /> */}
      <TimersDemo />
    </SafeAreaView>
  );
};

export default HomeScreen;

// flexDirection → main axis decide karta hai (row ya column)

// justifyContent → main axis ke along children ko align karta hai

// alignItems → cross axis ke along children ko align karta hai

// alignSelf → specific child ko cross axis me align karta hai

// flexWrap → children ko next line me wrap hone deta hai
