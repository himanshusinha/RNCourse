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
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
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
        <TextInput
          style={styles.input}
          placeholder="Enter your goals ..."
          onChangeText={goalInputHandler}
        />
        <View>
          <Button
            style={{width: '30%'}}
            title="Add Goals"
            onPress={addGoalHandler}
          />
        </View>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <TouchableOpacity>
                <View style={styles.goalItem}>
                  <Text style={styles.goalTitle}>{itemData.item.text}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => {
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
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    width: '70%',
    height: Platform.OS === 'ios' ? 45 : 45,
    marginVertical: 10,
    paddingStart: 10,
  },
  goalsContainer: {
    marginTop: 10,
  },
  goalItem: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: '#fff',
    backgroundColor: '#5e0acc',
  },
  goalTitle: {
    color: 'white',
  },
});
export default Home;
