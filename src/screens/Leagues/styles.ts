import {colors} from '../../assets/colors';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.black};
`;

export const ContainerPicker = styled.View`
  margin-top: 20px;
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
