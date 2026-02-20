import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Topic } from '../../utils/types';
import { DATA } from '../../constants/data';
/*
Hooks are special functions in React that allow functional components 
to use state and other React features without using class components.
*/
const HooksIntro: React.FC = () => {
  const renderItem = ({ item }: { item: Topic }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.bullet}>✔</Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Text style={styles.header}>React Native Hooks - Discussion Topics</Text>

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: 'white', flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default HooksIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  bullet: {
    fontSize: 16,
    color: 'red',
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    flex: 1,
    color: 'black',
  },
});
