import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Style from './About.style';

export type IAboutScreenProps = {};

export const AboutScreenDefaultProps = {};

export const AboutScreenNamespace = 'AboutScreen';

const AboutScreen: FC<IAboutScreenProps> = () => {
  return (
    <View style={Style().main}>
      <Text>AboutScreen</Text>
    </View>
  );
};

AboutScreen.displayName = AboutScreenNamespace;
AboutScreen.defaultProps = AboutScreenDefaultProps;
export default AboutScreen;
