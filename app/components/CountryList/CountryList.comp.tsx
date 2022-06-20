import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import Style from './CountryList.style';

export type ICountryListCompProps = {};

export const CountryListCompDefaultProps = {};

export const CountryListCompNamespace = 'CountryListComp';

const CountryListComp: FC<ICountryListCompProps> = () => {
  const DATA = [
    {
      id: 'a',
      picture: require('../../assets/icons/flags/flag-id.png'),
      name: 'Indonesia',
    },
    {
      id: 'b',
      picture: require('../../assets/icons/flags/flag-sg.png'),
      name: 'Indonesia',
    },
    {
      id: 'c',
      picture: require('../../assets/icons/flags/flag-us.png'),
      name: 'Indonesia',
    },
    {
      id: 'd',
      picture: require('../../assets/icons/flags/flag-jp.png'),
      name: 'Indonesia',
    },
    {
      id: 'e',
      picture: require('../../assets/icons/flags/flag-kr.png'),
      name: 'Indonesia',
    },
    {
      id: 'f',
      picture: require('../../assets/icons/flags/flag-th.png'),
      name: 'Indonesia',
    },
  ];
  return (
    <View style={Style().main}>
      <View style={Style().title}>
        <Text style={Style().titleBold}>Seller Based</Text>
        <Text>See all country</Text>
      </View>
      <View style={Style().flags}>
        {DATA.map((item) => (
          <View style={Style().flag} key={item.id}>
            <Image source={item.picture} />
          </View>
        ))}
      </View>
    </View>
  );
};

CountryListComp.displayName = CountryListCompNamespace;
CountryListComp.defaultProps = CountryListCompDefaultProps;
export default CountryListComp;
