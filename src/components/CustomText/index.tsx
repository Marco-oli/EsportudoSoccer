import React from 'react';
import {TextStyle, StyleProp} from 'react-native';

import {Text} from './styles';

export type WeightProps = 'regular' | 'medium' | 'bold' | number;

export interface ITextProps {
  size?: number;
  color?: string;
  weight?: WeightProps | number;
  opacity?: number;
  uppercase?: boolean;
  underlined?: boolean;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export const CustomText = ({
  children,
  color,
  size,
  weight,
  opacity,
  underlined,
  uppercase,
  style,
}: ITextProps) => {
  return (
    <Text
      color={color}
      size={size}
      weight={weight}
      opacity={opacity}
      underlined={underlined}
      uppercase={uppercase}
      style={style}>
      {children}
    </Text>
  );
};
