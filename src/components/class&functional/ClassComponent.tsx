import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StateType } from '../../utils/types';
/*
Class Component:
A class component is a React component written using ES6 classes
that can manage state and lifecycle methods using this.state and lifecycle functions.
*/
export class ClassComponent extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Counter: {this.state.counter}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
