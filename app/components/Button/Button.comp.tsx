import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import STYLE from './Button.style';

export type IButtonCompProps = {
  onPress: () => void;
  title: string;
  style: string;
};

export const ButtonCompDefaultProps = {};

export const ButtonCompNamespace = 'ButtonComp';

const ButtonComp: FC<IButtonCompProps> = (props) => {
  const { onPress, title, style } = props;
  const mainStyle: any = STYLE;
  const getStyle = style.split(' ').map((item: string) => {
    return mainStyle[item] || '';
  });

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={getStyle}>
      <Text style={STYLE.title}>{title}</Text>
    </TouchableOpacity>
  );
};

ButtonComp.displayName = ButtonCompNamespace;
ButtonComp.defaultProps = ButtonCompDefaultProps;
export default ButtonComp;
