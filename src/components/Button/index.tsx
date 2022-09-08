import React from 'react';
import {ButtonProps, ImageSourcePropType} from 'react-native';
import {colors} from '../../assets/colors';
import {WeightProps, CustomText} from '../CustomText';
import {Container} from './styles';

export interface MyButtonProps extends ButtonProps {
  title: string;
  titleColor?: string;
  icon?: ImageSourcePropType;
  width?: number;
  height?: number;
  borderColor?: string;
  backgroundColor?: string;
  onPress: () => void;
  weightTitle?: WeightProps;
  disabled?: boolean;
}

export const Button = ({
  title,
  titleColor,
  height,
  width,
  borderColor,
  backgroundColor,
  weightTitle,
  onPress,
  disabled,
}: MyButtonProps) => {
  return (
    <Container
      disabled={disabled}
      width={width}
      height={height}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      onPress={onPress}>
      <CustomText
        weight={weightTitle}
        size={15}
        color={titleColor ? titleColor : colors.white}>
        {title}
      </CustomText>
    </Container>
  );
};
