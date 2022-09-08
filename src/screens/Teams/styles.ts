import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.black};
`;

export const ContainerPickerButtons = styled.View`
  margin-top: 20px;
`;

export const BoxButtons = styled.View`
  margin-right: 5px;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  titlePicker: {
    marginBottom: 5,
  },
  picker: {
    backgroundColor: colors.white,
  },
});
