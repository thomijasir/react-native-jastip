import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Style from './Devider.style';

export type IDeviderCompProps = {};

export const DeviderCompDefaultProps = {};

export const DeviderCompNamespace = 'DeviderComp';

const DeviderComp: FC<IDeviderCompProps> = () => {
  return <View style={Style().main}></View>;
};

DeviderComp.displayName = DeviderCompNamespace;
DeviderComp.defaultProps = DeviderCompDefaultProps;
export default DeviderComp;
