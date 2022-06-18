import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Style from './Template.style';

export type ITemplateScreenProps = {};

export const TemplateScreenDefaultProps = {};

export const TemplateScreenNamespace = 'TemplateScreen';

const TemplateScreen: FC<ITemplateScreenProps> = () => {
  return (
    <View style={Style().main}>
      <Text>TemplateScreen</Text>
    </View>
  );
};

TemplateScreen.displayName = TemplateScreenNamespace;
TemplateScreen.defaultProps = TemplateScreenDefaultProps;
export default TemplateScreen;
