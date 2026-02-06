import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

interface MyButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const MyButton: FC<MyButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
