import { Component } from 'react';
import { Text, View } from 'react-native';

class ClassComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Class Component</Text>
      </View>
    );
  }
}
export default ClassComponent;
