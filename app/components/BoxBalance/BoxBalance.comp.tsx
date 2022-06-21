import React, { FC } from 'react';
import { Image, Text, View, Button, Alert } from 'react-native';
import Style from './BoxBalance.style';

export type IBoxBalanceCompProps = {};

export const BoxBalanceCompDefaultProps = {};

export const BoxBalanceCompNamespace = 'BoxBalanceComp';

const BoxBalanceComp: FC<IBoxBalanceCompProps> = () => {
  return (
    <View style={[Style().main, Style().shadowProp]}>
      <View style={Style().rowLeft}>
        <Image
          source={require('../../assets/icons/dana-logo-round-icon.png')}
        />
      </View>
      <View style={Style().rowMid}>
        <View>
          <Text style={Style().title}>Rp 2.500.000</Text>
        </View>
        <View>
          <Text style={Style().desc}>Credits Rp 0</Text>
        </View>
      </View>
      <View style={Style().rowRight}>
        <Button
          title="TopUp"
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
