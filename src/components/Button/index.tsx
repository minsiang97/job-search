import { ButtonProps } from '@components/Button/types';
import Text from '@components/Text';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Color from '@themes/Color';
import Fonts from 'themes/Fonts';

const Button: React.FC<ButtonProps> = props => {
  const { style, buttonText, buttonType, ...restProps } = props;
  const textColor =
    buttonType === 'primary'
      ? Color.white
      : buttonType === 'disabled'
      ? Color.disabledText
      : Color.black;
  return (
    <TouchableOpacity
      style={[
        styles.defaultButton,
        buttonType === 'primary' && styles.primaryButton,
        buttonType === 'transparent' && styles.transparentButton,
        buttonType === 'disabled' && styles.disabledButton,
        style,
      ]}
      disabled={buttonType === 'disabled'}
      {...restProps}>
      <Text style={[Fonts.style.h4, styles.text, { color: textColor }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  defaultButton: {
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 13,
    borderColor: Color.dividerGrey,
  },
  primaryButton: {
    backgroundColor: Color.primaryRed,
    borderColor: Color.primaryRed,
  },
  transparentButton: {
    backgroundColor: Color.transparent,
    borderColor: Color.transparent,
  },
  disabledButton: {
    backgroundColor: Color.disabled,
    borderColor: Color.disabled,
  },
  text: {
    textAlign: 'center',
  },
});
