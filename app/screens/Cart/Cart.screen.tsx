import React, { FC } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import GS from '../../assets/styles/General';
import ButtonComp from '../../components/Button/Button.comp';
import ContentArea from '../../components/ContentArea/ContentArea.comp';
import DeviderComp from '../../components/Devider/Devider.comp';
import { formatIDR } from '../../utils/Currency';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './Cart.style';

export type ICartScreenProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const CartScreenDefaultProps = {};

export const CartScreenNamespace = 'CartScreen';

const CartScreen: FC<ICartScreenProps> = ({ navigation }) => {
  const CART_LIST = [
    {
      id: 'x1',
      user: {
        picture: 'https://picsum.photos/50',
        name: 'Thomi Jasir',
        location: 'Singapore',
      },
      product: {
        name: 'Sepatu Air Jordan',
        price: 2500000,
        date: '2022-07-10',
        landed: '2022-07-10',
        picture: 'https://picsum.photos/50',
      },
      productQty: 2,
      expedition: 'Grab - SameDay',
    },
    {
      id: 'x2',
      user: {
        picture: 'https://picsum.photos/50',
        name: 'Thomi Jasir',
        location: 'Singapore',
      },
      product: {
        name: 'Sepatu Nike Air',
        price: 3500000,
        date: '2022-07-10',
        landed: '2022-07-10',
        picture: 'https://picsum.photos/50',
      },
      productQty: 1,
      expedition: 'GoSend - Instant',
    },
  ];

  const handleAdd = (id: any) => () => {
    console.log('ADD ID: ', id);
  };

  const handleDecrease = (id: any) => () => {
    console.log('DECRESE ID: ', id);
  };

  const removeCart = (id: any) => () => {
    console.log('Remove ', id);
  };

  const handleOrder = () => {
    navigation.navigate('Payment');
  };

  const renderItem = (cartList: any) => {
    return cartList.map((cart: any, index: number) => {
      const getItemStyle = [Style().item, Style().itemBorderBottom];
      if (cartList.length - 1 === index) {
        getItemStyle.pop();
      }
      return (
        <View style={getItemStyle} key={cart.id}>
          <View style={Style().rowLeft}>
            <View style={Style().rowImage}>
              <Image
                style={Style().profileImage}
                source={{ uri: cart.user.picture }}
              />
            </View>
          </View>
          <View style={Style().rowRight}>
            <View style={Style().nameInfo}>
              <Text style={GS.bold}>{cart.user.name}</Text>
              <Text>{cart.user.location}</Text>
            </View>
            <View style={Style().rowProduct}>
              <View style={Style().rowProductImage}>
                <Image
                  style={Style().productImage}
                  source={{ uri: cart.product.picture }}
                />
              </View>
              <View style={Style().rowProductInfo}>
                <View>
                  <Text style={Style().productDesc}>
                    {limitString(cart.product.name, 80)}
                  </Text>
                </View>
                <Text style={Style().productPrice}>
                  {formatIDR(cart.product.price)}
                </Text>
              </View>
            </View>
            <View style={Style().productDate}>
              <Text>
                Open PO until:
                <Text style={GS.bold}> {shortDate(cart.product.date)}</Text>
              </Text>
              <Text>
                Delivery
                <Text style={GS.bold}> {shortDate(cart.product.landed)}</Text>
              </Text>
            </View>
            <View style={Style().productQty}>
              <View style={Style().productQtyItem}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={Style().productQtyBtn}
                  onPress={handleDecrease(cart.id)}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={Style().productQtyText}>{cart.productQty}</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={Style().productQtyBtn}
                  onPress={handleAdd(cart.id)}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={Style().productQtyTrash}
                onPress={removeCart(cart.id)}>
                <Image
                  source={require('../../assets/icons/delete-bin-icon.png')}
                />
              </TouchableOpacity>
            </View>
            <Text>Expedition: </Text>
            <View style={Style().expBadge}>
              <View style={Style().expBadgeIcon}>
                <Image
                  source={require('../../assets/icons/motorbike-fill-icon.png')}
                />
              </View>
              <Text style={Style().expBadgeText}>{cart.expedition}</Text>
              <View style={Style().expBadgeArrow}>
                <Image
                  source={require('../../assets/icons/arrow-right-icon.png')}
                />
              </View>
            </View>
          </View>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={Style().main}>
      <ScrollView>
        <ContentArea>
          <View style={Style().items}>{renderItem(CART_LIST)}</View>
        </ContentArea>
      </ScrollView>
      <View>
        <DeviderComp />
        <View style={Style().spacingFooter}>
          <ContentArea>
            <ButtonComp
              style="btn primary doubleRounded"
              onPress={handleOrder}
              title="Order"
            />
          </ContentArea>
        </View>
      </View>
    </SafeAreaView>
  );
};

CartScreen.displayName = CartScreenNamespace;
CartScreen.defaultProps = CartScreenDefaultProps;
export default CartScreen;
