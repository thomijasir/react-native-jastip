import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Style from './Template.style';

export type ITemplateCompProps = {};

export const TemplateCompDefaultProps = {};

export const TemplateCompNamespace = 'TemplateComp';

const TemplateComp: FC<ITemplateCompProps> = () => {
  return (
    <View style={Style().main}>
      <Text>Template Component</Text>
    </View>
  );
};

TemplateComp.displayName = TemplateCompNamespace;
TemplateComp.defaultProps = TemplateCompDefaultProps;
export default TemplateComp;
