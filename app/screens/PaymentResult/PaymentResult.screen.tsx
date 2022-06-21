import React, { FC } from 'react';
import { Image, Text, View, SafeAreaView } from 'react-native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import ButtonComp from '../../components/Button/Button.comp';
import Style from './PaymentResult.style';

export type IPaymentResultScreenProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const PaymentResultScreenDefaultProps = {};

export const PaymentResultScreenNamespace = 'PaymentResultScreen';

const PaymentResultScreen: FC<IPaymentResultScreenProps> = ({ navigation }) => {
  const backToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };
  return (
    <SafeAreaView style={Style().main}>
      <Image source={require('../../assets/images/success-image.png')} />
      <Text style={Style().title}>Payment Success!</Text>
      <Text style={Style().desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Text>
      <View style={Style().btnSpacing}></View>
      <View style={Style().paymentBtn}>
        <ButtonComp
          title="View Detail Order"
          style="btn outlineBlack doubleRounded"
          onPress={() => {
            console.log('SUCCESS');
          }}
        />
        <View style={Style().btnSpacing}></View>
        <ButtonComp
          title="Back To Home"
          style="btn primary doubleRounded"
          onPress={backToHome}
        />
      </View>
    </SafeAreaView>
  );
};

PaymentResultScreen.displayName = PaymentResultScreenNamespace;
PaymentResultScreen.defaultProps = PaymentResultScreenDefaultProps;
export default PaymentResultScreen;
