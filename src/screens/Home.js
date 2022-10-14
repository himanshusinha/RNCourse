import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  Platform,
  FlatList,
} from 'react-native';
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';
const Home = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = enteredGoalText => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };
  const onDeleteHandler = () => {
    console.log('DELETE');
  };
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <GoalInput onAddGoal={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={onDeleteHandler}
              />
            );
          }}
          keyExtractor={item => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    borderColor: 'blue',
  },

  goalsContainer: {
    marginTop: 10,
  },
});
export default Home;
