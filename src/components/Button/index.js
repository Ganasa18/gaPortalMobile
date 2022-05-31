import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({color, text, textColor, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: !color ? '#2A4878' : color,
    padding: 12,
    borderRadius: 5,
  }),
  text: textColor => ({
    color: !textColor ? '#FFFFFF' : textColor,
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    alignItems: 'center',
    textAlign: 'center',
  }),
});
