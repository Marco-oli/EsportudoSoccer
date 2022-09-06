import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Text = styled.Text`
  font-size: ${({size}) => size || 15}px;
  color: ${({color}) => color || colors.white};
  font-weight: ${({weight}) => weight || 400};
  opacity: ${({opacity}) => opacity || 1};
  text-decoration: ${({underlined}) => (underlined ? 'underline' : 'none')};
  text-decoration-color: ${colors.light};
  text-transform: ${({uppercase}) => (uppercase ? 'uppercase' : 'none')};
`;
