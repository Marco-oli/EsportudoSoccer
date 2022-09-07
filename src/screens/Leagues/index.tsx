import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import {CustomText} from '../../components/CustomText';

import {useGetCountries} from '../../hooks/Home/useGetCountries';
import {useGetLeagues} from '../../hooks/Home/useGetLeagues';

import {Container, ContainerPicker, ContainerLoading, styles} from './styles';
import {colors} from '../../assets/colors';
import {CardInfo} from '../../components/CardInfo';

export const LeagueScreen = () => {
  const {getLeagues, leagues, loadingLeagues} = useGetLeagues();
  const {countries, getCountries, loadingCountries} = useGetCountries();

  const [country, setCountry] = useState();

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (country) {
      getLeagues(country);
    }
  }, [country, getLeagues]);

  console.log(leagues);

  return (
    <Container>
      <CustomText size={24} weight={700}>
        Olá seja bem vindo!
      </CustomText>

      <ContainerPicker>
        <CustomText size={16} weight={700} style={styles.titlePicker}>
          Selecione um País:
        </CustomText>

        <Picker
          selectedValue={country}
          onValueChange={item => setCountry(item)}
          style={styles.picker}>
          <Picker.Item label="-" value="" />
          {countries.map(item => (
            <Picker.Item key={item.code} label={item.name} value={item.name} />
          ))}
        </Picker>
      </ContainerPicker>

      {loadingLeagues ? (
        <ContainerLoading>
          <ActivityIndicator size="large" color={colors.white} />
        </ContainerLoading>
      ) : (
        <FlatList
          data={leagues}
          style={{marginTop: 15}}
          renderItem={({item}) => (
            <CardInfo
              name={item.league.name}
              type={item.league.type}
              logo={item.league.logo}
            />
          )}
        />
      )}
    </Container>
  );
};
