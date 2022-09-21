import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  Platform,
} from 'react-native';
const Home = () => {
  const [enteredText, setEnteredText] = useState('');

  const addGoalHandler = () => {
    console.log(enteredText);
  };
  const inputHandler = text => {
    setEnteredText(text);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your goals ..."
          onChangeText={inputHandler}
        />
        <View>
          <Button
            style={{width: '30%'}}
            title="Add Goals"
            onPress={addGoalHandler}
          />
        </View>
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
    paddingStart: 20,
  },
});
export default Home;
