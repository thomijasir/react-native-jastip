import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComp from '../../components/Button/Button.comp';
import Style from './PaymentResult.style';

export type IPaymentResultScreenProps = {};

export const PaymentResultScreenDefaultProps = {};

export const PaymentResultScreenNamespace = 'PaymentResultScreen';

const PaymentResultScreen: FC<IPaymentResultScreenProps> = () => {
  return (
    <SafeAreaView style={Style().main}>
      <Image source={require('../../assets/images/success-image.png')} />
      <Text>Payment Success</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      <ButtonComp
        title="View Detail Order"
        style="btn outlineBlack doubleRounded"
        onPress={() => {
          console.log('SUCCESS');
        }}
      />
      <ButtonComp
        title="Chat Seller"
        style="btn primary doubleRounded"
        onPress={() => {
          console.log('SUCCESS');
        }}
      />
    </SafeAreaView>
  );
};

PaymentResultScreen.displayName = PaymentResultScreenNamespace;
PaymentResultScreen.defaultProps = PaymentResultScreenDefaultProps;
export default PaymentResultScreen;
