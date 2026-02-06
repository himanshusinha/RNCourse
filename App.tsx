import "./global.css"
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <Text className="text-4xl font-bold text-white">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}