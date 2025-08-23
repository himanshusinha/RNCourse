import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals ...."
        />
        <Button title="Add Goal" />
      </View>
      <View style={styles.listContainer}>
        <Text>List of goals...</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    padding: 8,
    marginRight: 8,
  },
  listContainer: {
    marginTop: 10,
  },
});
