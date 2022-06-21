import React, { FC } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { formatIDRNoDecimal } from '../../utils/Currency';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './ProductList.style';

export type IProductListCompProps = {
  onPress: (id: string) => void;
};

export const ProductListCompDefaultProps = {};

export const ProductListCompNamespace = 'ProductListComp';

const ProductListComp: FC<IProductListCompProps> = ({ onPress }) => {
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
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bx',
      name: 'Air Jordan 6 Retro',
      picture: require('../../assets/images/products/product-1.png'),
      price: 2000000,
      date: '2022-07-10',
      landed: '2022-07-20',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6x',
      name: "Nike Blazer Mid '77 Vintage",
      picture: require('../../assets/images/products/product-2.png'),
      price: 3500000,
      date: '2022-07-19',
      landed: '2022-07-30',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7x',
      name: 'Air Force 1 white light blue',
      picture: require('../../assets/images/products/product-3.png'),
      price: 990000,
      date: '2022-07-20',
      landed: '2022-07-30',
    },
  ];

  return (
    <View style={Style().main}>
      {DATA.map((dataItem) => {
        return (
          <TouchableOpacity
            style={Style().item}
            key={dataItem.id}
            activeOpacity={0.8}
            onPress={() => {
              onPress(dataItem.id);
            }}>
            <Image style={Style().itemImage} source={dataItem.picture} />
            <View style={Style().itemInfo}>
              <Text style={Style().itemName}>
                {limitString(dataItem.name, 23)}
              </Text>
              <Text style={Style().itemPrice}>
                {formatIDRNoDecimal(dataItem.price)}
              </Text>
              <View style={Style().itemDate}>
                <Image
                  source={require('../../assets/icons/flight-land-icon.png')}
                />
                <Text> {shortDate(dataItem.date)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

ProductListComp.displayName = ProductListCompNamespace;
ProductListComp.defaultProps = ProductListCompDefaultProps;
export default ProductListComp;
