import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Container = styled.TouchableOpacity`
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height || '60px'};
  border: ${({borderColor}) =>
    borderColor ? `1px solid ${borderColor}` : `1px solid ${colors.purple}`};
  border-radius: 6px;
  background-color: ${({backgroundColor}) =>
    backgroundColor ? backgroundColor : 'transparent'};
  align-items: center;
  justify-content: center;
`;
