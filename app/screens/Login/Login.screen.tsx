import React, { FC } from 'react';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import ButtonComp from '../../components/Button/Button.comp';
import Style from './Login.style';
import useApi from '../../hooks/useApi';
import General from '../../assets/styles/General';

export type ILoginScreenProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const LoginScreenDefaultProps = {};

export const LoginScreenNamespace = 'LoginScreen';

const LoginScreen: FC<ILoginScreenProps> = ({ navigation }) => {
  const client = useApi();
  // TEST ACCOUNT
  // NUMBER 0812121213 / 0812121211
  // PIN 123123
  const [phone, setNumber] = React.useState<string>('');

  const openWebView = () => {
    client.bindingInit(phone).then((uri) => {
      navigation.navigate('Binding', { uri });
    });
  };

  const onChangeNumber = (val: string) => {
    setNumber(val);
  };

  return (
    <SafeAreaView style={Style().main}>
      <KeyboardAvoidingView style={Style().btnLogin} behavior="padding">
        <View style={Style().appImage}>
          <Image
            style={Style().image}
            source={require('../../assets/images/login-image-screen.png')}
          />
        </View>
        <Text style={[General.title, Style().title]}>Welcome to Jastip</Text>
        {/* <TextInput
          style={Style().input}
          onChangeText={onChangeNumber}
          value={phone}
          placeholder="+62 your phone number"
          keyboardType="numeric"
        /> */}
        <View style={Style().spacing} />
        <ButtonComp
          style="btn primary doubleRounded"
          title="Login/Register"
          onPress={openWebView}
        />
        <View style={Style().footerImage}>
          <Image source={require('../../assets/images/power-by-dana.png')} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

LoginScreen.displayName = LoginScreenNamespace;
LoginScreen.defaultProps = LoginScreenDefaultProps;
export default LoginScreen;
