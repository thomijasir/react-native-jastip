import React, { FC } from 'react';
import { Image, Text, View, Button, Alert } from 'react-native';
import Style from './BoxBalance.style';

export type IBoxBalanceCompProps = {
  balance: string;
  credits: string;
};

export const BoxBalanceCompDefaultProps = {
  balance: 'Loading..',
  credits: 'Rp. 0',
};

export const BoxBalanceCompNamespace = 'BoxBalanceComp';

const BoxBalanceComp: FC<IBoxBalanceCompProps> = ({ balance, credits }) => {
  return (
    <View style={[Style().main, Style().shadowProp]}>
      <View style={Style().rowLeft}>
        <Image
          source={require('../../assets/icons/dana-logo-round-icon.png')}
        />
      </View>
      <View style={Style().rowMid}>
        <View>
          <Text style={Style().title}>{balance}</Text>
        </View>
        <View>
          <Text style={Style().desc}>Credits {credits}</Text>
        </View>
      </View>
      <View style={Style().rowRight}>
        <Button
          title="Top Up"
          onPress={() =>
            Alert.alert('Success', "You're success update dana balance.")
          }
        />
      </View>
    </View>
  );
};

BoxBalanceComp.displayName = BoxBalanceCompNamespace;
BoxBalanceComp.defaultProps = BoxBalanceCompDefaultProps;
export default BoxBalanceComp;
