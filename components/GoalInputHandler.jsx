import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInputHandler = ({ onAddGoals }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handleAddGoal() {
    if (enteredGoalText.trim() === "") return;
    onAddGoals(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goals..."
        placeholderTextColor="#ccc"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    padding: 8,
    marginRight: 8,
  },
});

export default GoalInputHandler;
