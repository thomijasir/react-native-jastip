import React, { FC } from 'react';
import {
  Text,
  View,
  FlatList,
  Animated,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './FeedCarousel.style';

export type IFeedCarouselCompProps = {};

export const FeedCarouselCompDefaultProps = {};

export const FeedCarouselCompNamespace = 'FeedCarouselComp';

const FeedCarouselComp: FC<IFeedCarouselCompProps> = () => {
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const pan = React.useRef(new Animated.ValueXY()).current;

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Thomi Jasir',
      picture: 'https://picsum.photos/50',
      text: 'Gw rencana akan ke Thailand tanggal 17 Oct ini. Kalo ada yang mau jastip silahkan chat ya.',
      date: '2022-07-10',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Agung Sutopo',
      picture: 'https://picsum.photos/50',
      text: 'Mau ke zimbabwe tanggal 10 bulan ini balik tgl 19',
      date: '2022-07-19',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Saha Maneh',
      picture: 'https://picsum.photos/50',
      text: 'Mau traveling ke tokoyo tanggal 10 balik tgl 20',
      date: '2022-07-20',
    },
  ];

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
          <View>
            <Image
              style={Style().rowRightDateImage}
              source={require('../../assets/icons/w-flight-land-icon.png')}
            />
          </View>
          <View>
            <Text style={Style().rowRightDateText}>{shortDate(item.date)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      data={DATA}
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
