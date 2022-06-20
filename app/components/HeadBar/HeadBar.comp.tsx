import React, { FC } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import Style from './HeadBar.style';

export type IHeadBarCompProps = {};

export const HeadBarCompDefaultProps = {};

export const HeadBarCompNamespace = 'HeadBarComp';

const HeadBarComp: FC<IHeadBarCompProps> = () => {
  return (
    <View style={[Style().main]}>
      <View style={Style().rowInput}>
        <TextInput
          style={Style().input}
          underlineColorAndroid="transparent"
          placeholder="Search keyword"
        />
        <Image
          style={Style().rowInputFindIcon}
          source={require('../../assets/icons/search-icon.png')}
        />
      </View>
      <View style={Style().rowIcon}>
        <Image source={require('../../assets/icons/w-chat-icon.png')} />
      </View>
      <View style={Style().rowIcon}>
        <Image source={require('../../assets/icons/w-file-paper-icon.png')} />
      </View>
      <View style={Style().rowIcon}>
        <Image source={require('../../assets/icons/w-notification-icon.png')} />
      </View>
    </View>
  );
};

HeadBarComp.displayName = HeadBarCompNamespace;
HeadBarComp.defaultProps = HeadBarCompDefaultProps;
export default HeadBarComp;
