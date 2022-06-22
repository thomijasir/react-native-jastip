import React, { FC } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Style from './CountryList.style';

export type ICountryListCompProps = {
  onPress: (val: string) => void;
};

export const CountryListCompDefaultProps = {};

export const CountryListCompNamespace = 'CountryListComp';

const CountryListComp: FC<ICountryListCompProps> = ({ onPress }) => {
  const DATA = [
    {
      id: 'a',
      picture: require('../../assets/icons/flags/flag-id.png'),
      name: 'Indonesia',
    },
    {
      id: 'b',
      picture: require('../../assets/icons/flags/flag-sg.png'),
      name: 'Singapore',
    },
    {
      id: 'c',
      picture: require('../../assets/icons/flags/flag-us.png'),
      name: 'malaysia',
    },
    {
      id: 'd',
      picture: require('../../assets/icons/flags/flag-jp.png'),
      name: 'japan',
    },
    {
      id: 'e',
      picture: require('../../assets/icons/flags/flag-kr.png'),
      name: 'korea',
    },
    {
      id: 'f',
      picture: require('../../assets/icons/flags/flag-th.png'),
      name: 'thailand',
    },
  ];
  return (
    <View style={Style().main}>
      <View style={Style().title}>
        <Text style={Style().titleBold}>Countries</Text>
        <Text>See all country</Text>
      </View>
      <View style={Style().flags}>
        {DATA.map((item) => (
          <Pressable
            onPress={() => {
              onPress(item.name);
            }}
            style={Style().flag}
            key={item.id}>
            <Image source={item.picture} />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

CountryListComp.displayName = CountryListCompNamespace;
CountryListComp.defaultProps = CountryListCompDefaultProps;
export default CountryListComp;
