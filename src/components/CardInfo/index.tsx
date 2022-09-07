import React from 'react';
import {colors} from '../../assets/colors';
import {ILeagueParams} from '../../interfaces/league';
import {CustomText} from '../CustomText';

import {
  Container,
  ContainerInfos,
  ContainerLogo,
  ContainerTitle,
  ContainerType,
  Image,
} from './styles';

export const CardInfo = ({logo, type, name}: ILeagueParams) => {
  return (
    <Container>
      <ContainerLogo>
        <Image source={{uri: logo}} />
      </ContainerLogo>

      <ContainerInfos>
        <ContainerTitle>
          <CustomText size={18} weight={500} style={{marginBottom: 5}}>
            Name: {name}
          </CustomText>
        </ContainerTitle>

        <ContainerType>
          <CustomText size={14} weight={500} color={colors.gray}>
            Type: {type}
          </CustomText>
        </ContainerType>
      </ContainerInfos>
    </Container>
  );
};
