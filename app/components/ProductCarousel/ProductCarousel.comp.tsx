import React, { FC, useMemo } from 'react';
import {
  Text,
  View,
  FlatList,
  Animated,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { formatRupiah } from '../../utils/Currency';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './ProductCarousel.style';

export type IProductCarouselCompProps = {
  productList: any;
  onPress: (id: string) => void;
};

export const ProductCarouselCompDefaultProps = {};

export const ProductCarouselCompNamespace = 'ProductCarouselComp';

const ProductCarouselComp: FC<IProductCarouselCompProps> = ({
  productList,
  onPress,
}) => {
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
  const boxWidth = scrollViewWidth * (Platform.OS === 'ios' ? 0.9 : 0.8);
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const pan = React.useRef(new Animated.ValueXY()).current;

  const mapToProductCarousel = useMemo(() => {
    return productList.map((item: any) => ({
      id: item.id,
      name: item.productName,
      picture: item.productImageUrl,
      price: item.price,
      date: item.openPreOrderDate,
      landed: item.sellerReturnDate,
    }));
  }, [productList]);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Air Jordan 6 Retro',
      picture: require('../../assets/images/products/product-1.png'),
      price: 2000000,
      date: '2022-07-10',
      landed: '2022-07-20',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: "Nike Blazer Mid '77 Vintage",
      picture: require('../../assets/images/products/product-2.png'),
      price: 3500000,
      date: '2022-07-19',
      landed: '2022-07-30',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Air Force 1 white light blue',
      picture: require('../../assets/images/products/product-3.png'),
      price: 990000,
      date: '2022-07-20',
      landed: '2022-07-30',
    },
  ];

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
      style={Style().rowItem}
      activeOpacity={0.8}
      onPress={() => {
        onPress(item.id);
      }}>
      <View style={Style().colTop}>
        <Image style={Style().colTopImage} source={{ uri: item.picture }} />
      </View>
      <View style={Style().colBottom}>
        <Text style={Style().colBottomText}>{limitString(item.name, 20)}</Text>
        <Text style={Style().colBottomPrice}>{formatRupiah(item.price)}</Text>
        <View style={[Style().flexCol, Style().timeInfo]}>
          <View style={Style().flexCol}>
            <Image source={require('../../assets/icons/time-watch-icon.png')} />
            <Text> {shortDate(item.date)}</Text>
          </View>
          <View style={Style().flexCol}>
            <Image
              source={require('../../assets/icons/flight-land-icon.png')}
            />
            <Text> {shortDate(item.landed)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      data={mapToProductCarousel}
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

ProductCarouselComp.displayName = ProductCarouselCompNamespace;
ProductCarouselComp.defaultProps = ProductCarouselCompDefaultProps;
export default ProductCarouselComp;
