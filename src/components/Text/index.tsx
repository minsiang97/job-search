import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';

const Text: React.FC<TextProps> = props => {
  const { children, style, ...restProps } = props;
  return (
    <RNText style={[styles.text, style]} {...restProps}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
  },
});
