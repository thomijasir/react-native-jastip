import React, { FC, useMemo } from 'react';
import {
  Text,
  View,
  FlatList,
  Animated,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './FeedCarousel.style';

export type IFeedCarouselCompProps = {
  feedList: any;
};

export const FeedCarouselCompDefaultProps = {};

export const FeedCarouselCompNamespace = 'FeedCarouselComp';

const FeedCarouselComp: FC<IFeedCarouselCompProps> = ({ feedList }) => {
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
  const boxWidth = scrollViewWidth * (Platform.OS === 'ios' ? 0.9 : 0.8);
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const pan = React.useRef(new Animated.ValueXY()).current;

  const mapToFeedCarousel = useMemo(() => {
    return feedList.map((item: any) => {
      return {
        id: item.id,
        name: item.userName,
        picture: item.imageUrl,
        text: item.message,
        date: item.returnDate,
      };
    });
  }, [feedList]);

  const handleNavigate = (data: any) => () => {
    Alert.alert(data.name, data.text);
  };

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={Style().rowItem}
      onPress={handleNavigate(item)}>
      <View style={Style().rowLeft}>
        <Image style={Style().rowLeftPicture} source={{ uri: item.picture }} />
      </View>
      <View style={Style().rowRight}>
        <View>
          <Text style={Style().rowRightName}>{item.name}</Text>
        </View>
        <View>
          <Text style={Style().rowRightText}>{limitString(item.text, 75)}</Text>
        </View>
        <View style={Style().rowRightDate}>
          <View style={Style().rowComments}>
            <View>
              <Image
                style={Style().rowRightDateImage}
                source={require('../../assets/icons/w-flight-land-icon.png')}
              />
            </View>
            <Text style={Style().rowRightDateText}>
              {' '}
              {shortDate(item.date)}
            </Text>
          </View>
          <View style={Style().rowComments}>
            <View>
              <Image
                source={require('../../assets/icons/w-comments-icon.png')}
              />
            </View>
            <Text style={Style().rowRightDateText}> 4 Comments</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      data={mapToFeedCarousel}
      contentInsetAdjustmentBehavior="never"
      snapToAlignment="center"
      decelerationRate="fast"
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      snapToInterval={boxWidth}
      contentInset={{
        left: halfBoxDistance,
        right: halfBoxDistance,
      }}
      contentOffset={{ x: halfBoxDistance * -1, y: 0 }}
      onLayout={(e) => {
        setScrollViewWidth(e.nativeEvent.layout.width);
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: pan.x } } }],
        {
          useNativeDriver: false,
        },
      )}
      keyExtractor={(item, index) => `${index}-${item}`}
      renderItem={renderItem}
    />
  );
};

FeedCarouselComp.displayName = FeedCarouselCompNamespace;
FeedCarouselComp.defaultProps = FeedCarouselCompDefaultProps;
export default FeedCarouselComp;
