import React from 'react';
import { View, ScrollView } from 'react-native';
import type { FlexStyle } from 'react-native';
import styles from './Body.style';

const renderScrollView = (
	bodyStyle: Object,
	backgroundColor?: string,
	children?: React.ReactNode
): JSX.Element => (
  <ScrollView
    keyboardShouldPersistTaps={'handled'}
    scrollEnabled={false}
    contentContainerStyle={{ ...bodyStyle, backgroundColor }}>
    {children}
  </ScrollView>
);

const renderView = (
  bodyStyle: Object,
  backgroundColor?: string,
  children?: React.ReactNode,
): JSX.Element => (
  <View style={{ ...bodyStyle, backgroundColor }}>{children}</View>
);

const Body: React.FC<{
  children?: React.ReactNode;
  type?: string;
  align?: FlexStyle['justifyContent'];
  backgroundColor?: string;
  isFocus?: boolean;
	justifyContent?: FlexStyle['justifyContent'];
}> = ({
	children,
	type,
	align,
	backgroundColor,
	isFocus,
	justifyContent
}) => {
  let bodyStyle;
  if (type === 'fullscreen') {
    bodyStyle = styles().bodyFullScreen;
  } else if (type === 'withFooter') {
    bodyStyle = styles(align).bodyWithFooter;
  } else if (type === 'noPadding') {
    bodyStyle = styles().bodyNoPadding;
  } else if (type === 'scroll') {
    bodyStyle = isFocus ? styles('center').bodyScrollFocus : styles(align, justifyContent).bodyScroll;
  } else {
    bodyStyle = styles(align).body;
  }

  if (type === 'scroll') {
    return renderScrollView(bodyStyle, backgroundColor, children);
  } else {
    return renderView(bodyStyle, backgroundColor, children);
  }
};

export default Body;
