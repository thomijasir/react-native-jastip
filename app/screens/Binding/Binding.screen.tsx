import React, { FC } from 'react';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import { WebView } from 'react-native-webview';
import uuid from 'react-native-uuid';
import { getParameterByName } from '../../utils/Helper';
import Style from './Binding.style';
import { AUTH_CODE } from '../../constants';
import useAsyncStorage from '../../hooks/useAsyncStorage';

type RootStackParamList = {
  uri: any;
};

export type IBindingProps = {
  route: RouteProp<RootStackParamList>;
  navigation: NavigationHelpers<ParamListBase>;
};

export const BindingDefaultProps = {};

export const BindingNamespace = 'Binding';

const Binding: FC<IBindingProps> = ({ navigation, route }) => {
  const authCodeStore = useAsyncStorage(AUTH_CODE);
  console.log('BINDING URI: ', route.params?.uri);
  const webViewState = (webViewState: any) => {
    const authCode = getParameterByName('auth_code', webViewState.url);
    const state = getParameterByName('state', webViewState.url);
    if (authCode) {
      const authStore = JSON.stringify({
        authCode,
        state,
      });
      authCodeStore.store(authStore).then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      });
    }
  };

  // const SIT_URI = `https://m.sit.dana.id/m/portal/oauth?requestId=${getID}&clientId=2020063079029200069881&scopes=CASHIER,QUERY_BALANCE,DEFAULT_BASIC_PROFILE,MINI_DANA,PUBLIC_ID,KYC_INFO,TRANSFER_MONEY&redirectUrl=https://www.google.com`;
  // const SANDBOX_URI = `https://m.test01.dana.id/m/portal/oauth?requestId=1234567asdfasdf1123fda&clientId=211020000000000000044&scopes=PUBLIC_ID,TRANSFER_MONEY,DEFAULT_BASIC_PROFILE&redirectUrl=https://www.google.com`;
  // const TEST_URI =
  //   'https://m.test01.dana.id/d/portal/oauth?state=123123&requestId=1231234&clientId= 2020031137204373152202&scopes=PUBLIC_ID,TRANSFER_MONEY,DEFAULT_BASIC_PROFILE&redirectUrl=https%3A%2F%2Fh5-staging-billers.innov8.id%2FSVC-fa427c8a%3Fenv%3Dtest01';

  return (
    <SafeAreaView style={Style().main}>
      <WebView
        source={{ uri: route.params?.uri }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState={false}
        onNavigationStateChange={webViewState}
        // userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
      />
    </SafeAreaView>
  );
};

Binding.displayName = BindingNamespace;
Binding.defaultProps = BindingDefaultProps;
export default Binding;
