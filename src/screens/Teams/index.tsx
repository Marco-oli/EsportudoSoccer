import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {colors} from '../../assets/colors';
import {Button} from '../../components/Button';
import {CardInfo} from '../../components/CardInfo';
import {CustomText} from '../../components/CustomText';
import {useLeagueContext} from '../../context/leagueContext';
import {useGetSeason} from '../../hooks/useGetSeason';
import {useGetTeams} from '../../hooks/useGetTeams';

import {
  Container,
  ContainerPickerButtons,
  BoxButtons,
  ContainerLoading,
  styles,
} from './styles';

export const TeamScreen = () => {
  const {getTeams, loadingTeams, teams} = useGetTeams();
  const {leagueData} = useLeagueContext();
  const {getSeasons, seasons} = useGetSeason();

  const [season, setSeason] = useState(0);

  useEffect(() => {
    getSeasons();
  }, []);

  useEffect(() => {
    if (leagueData && season) {
      getTeams(leagueData.id, season);
    }
  }, [leagueData, getTeams, season]);

  console.log('=====', teams);

  return (
    <Container>
      <CustomText size={22} weight={700} style={styles.titlePicker}>
        Liga: {leagueData.name ? leagueData.name : 'Nenhuma liga selecionada'}
      </CustomText>

      <ContainerPickerButtons>
        <CustomText size={16} weight={700} style={styles.titlePicker}>
          Selecione uma Temporada:
        </CustomText>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={seasons}
          style={{paddingVertical: 15}}
          renderItem={({item}) => (
            <BoxButtons>
              <Button
                disabled={!leagueData.name}
                title={item}
                width={70}
                height={30}
                backgroundColor={item === season ? colors.purple : colors.green}
                borderColor={'transparent'}
                weightTitle={700}
                onPress={() => setSeason(item)}
              />
            </BoxButtons>
          )}
        />
      </ContainerPickerButtons>

      {loadingTeams ? (
        <ContainerLoading>
          <ActivityIndicator size="large" color={colors.white} />
        </ContainerLoading>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={teams}
          renderItem={({item}) => (
            <CardInfo
              onPress={() => {}}
              name={item.team.name}
              type={item.team.founded}
              logo={item.team.logo}
              {...item.team}
            />
          )}
        />
      )}
    </Container>
  );
};
