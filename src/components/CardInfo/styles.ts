import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: 22px 25px;
  border: 1px solid ${props => props.theme.colors.purple};
  border-radius: 8px;
  background-color: ${props =>
    props.selected ? props.theme.colors.black : props.theme.colors.white};
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogo = styled.View`
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfos = styled.View`
  margin-left: 20px;
`;

export const ContainerTitle = styled.View``;

export const ContainerType = styled.View``;
