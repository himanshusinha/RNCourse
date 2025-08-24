import { useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoalInputHandler from "../components/GoalInputHandler";
import GoalItem from "../components/GoalItem";

export default function Index() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goalText) {
    if (goalText.trim() === "") {
      Alert.alert("Alert", "Please enter a goal before adding.");
      return;
    }

    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goalText]);
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <GoalInputHandler onAddGoals={addGoalHandler} />

      <View style={styles.listContainer}>
        <FlatList
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={courseGoals}
          renderItem={({ item }) => <GoalItem text={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    marginTop: 10,
  },
});
