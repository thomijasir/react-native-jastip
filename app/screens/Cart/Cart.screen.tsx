import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import GS from '../../assets/styles/General';
import ButtonComp from '../../components/Button/Button.comp';
import ContentArea from '../../components/ContentArea/ContentArea.comp';
import DeviderComp from '../../components/Devider/Devider.comp';
import { formatRupiah } from '../../utils/Currency';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './Cart.style';
import { AppContext } from '../../stores/AppProvider';
import { EXPEDITION_ENUM } from '../../constants';
import { SET_CARTS } from '../../stores/AppReducers';

export type ICartScreenProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const CartScreenDefaultProps = {};

export const CartScreenNamespace = 'CartScreen';

// const sample = [
//   {
//     id: 'x1',
//     user: {
//       picture: 'https://picsum.photos/50',
//       name: 'Thomi Jasir',
//       location: 'Singapore',
//     },
//     product: {
//       name: 'Sepatu Air Jordan',
//       price: 2500000,
//       date: '2022-07-10',
//       landed: '2022-07-10',
//       picture: 'https://picsum.photos/50',
//     },
//     productQty: 2,
//     expedition: 'Grab - SameDay',
//   },
//   {
//     id: 'x2',
//     user: {
//       picture: 'https://picsum.photos/50',
//       name: 'Thomi Jasir',
//       location: 'Singapore',
//     },
//     product: {
//       name: 'Sepatu Nike Air',
//       price: 3500000,
//       date: '2022-07-10',
//       landed: '2022-07-10',
//       picture: 'https://picsum.photos/50',
//     },
//     productQty: 1,
//     expedition: 'GoSend - Instant',
//   },
// ];

const CartScreen: FC<ICartScreenProps> = ({ navigation }) => {
  const context = useContext(AppContext);
  const [state, mState] = useState({
    cartList: context.carts || [],
  });

  const firstUpdate = useRef(true);

  useEffect(() => {
    const createCart = context.carts.map((x: any) => {
      return {
        ...x,
        productQty: x.productQty ? x.productQty : 1,
        expedition: x.expedition
          ? x.expedition
          : EXPEDITION_ENUM[Math.floor(Math.random() * 8)],
      };
    });
    setState({ cartList: createCart });
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    context.setContext(state.cartList, SET_CARTS);
  }, [state.cartList]);

  const setState = (obj: any) => {
    mState((prevState: any) => ({
      ...prevState,
      ...obj,
    }));
  };

  const handleAdd = (id: any) => () => {
    const newCartList: any = [...state.cartList];
    const getIndex = newCartList.findIndex((item: any) => item.id === id);
    if (getIndex < 0) {
      Toast.show('Error! Handle Add');
    } else {
      newCartList[getIndex].productQty += 1;
    }
    setState({ cartList: newCartList });
  };

  const handleDecrease = (id: any) => () => {
    const newCartList: any = [...state.cartList];
    const getIndex = newCartList.findIndex((item: any) => item.id === id);
    if (getIndex < 0) {
      Toast.show('Error! Handle Decrese');
    } else {
      if (newCartList[getIndex].productQty <= 1) {
        newCartList[getIndex].productQty = 1;
      } else {
        newCartList[getIndex].productQty -= 1;
      }
    }
    setState({ cartList: newCartList });
  };

  const removeCart = (id: any) => () => {
    Alert.alert('Remove', 'Are you sure want to remove this product?', [
      {
        text: 'Cancel',

        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          const newCartList: any = [...state.cartList];
          const getIndex = newCartList.findIndex((item: any) => item.id === id);
          if (getIndex > -1) {
            newCartList.splice(getIndex, 1);
          }
          console.log(newCartList);
          setState({ cartList: newCartList });
        },
      },
    ]);
  };

  const handleOrder = () => {
    context.setContext(state.cartList, SET_CARTS);
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
                  source={{ uri: cart.product.productImageUrl }}
                />
              </View>
              <View style={Style().rowProductInfo}>
                <View>
                  <Text style={Style().productDesc}>
                    {limitString(cart.product.productName, 80)}
                  </Text>
                </View>
                <Text style={Style().productPrice}>
                  {formatRupiah(cart.product.price)}
                </Text>
              </View>
            </View>
            <View style={Style().productDate}>
              <Text>
                Open PO until:
                <Text style={GS.bold}>
                  {' '}
                  {shortDate(cart.product.openPreOrderDate)}
                </Text>
              </Text>
              <Text>
                Delivery
                <Text style={GS.bold}>
                  {' '}
                  {shortDate(cart.product.sellerReturnDate)}
                </Text>
              </Text>
            </View>
            <View style={Style().productQty}>
              <View style={Style().productQtyItem}>
                <TouchableOpacity
                  style={Style().productQtyBtn}
                  onPress={handleDecrease(cart.id)}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={Style().productQtyText}>{cart.productQty}</Text>
                <TouchableOpacity
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

  if (state.cartList.length) {
    return (
      <SafeAreaView style={Style().main}>
        <ScrollView>
          <ContentArea>
            <View style={Style().items}>{renderItem(state.cartList)}</View>
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
  }

  return (
    <SafeAreaView style={Style().main}>
      <View style={Style().emptyList}>
        <Image source={require('../../assets/images/empty-list.png')} />
        <Text style={Style().emptyTitle}>
          Oops there’s no stuff in your cart..
        </Text>
        <Text style={Style().emptyDesc}>Let’s add & buy some stuff</Text>
      </View>
    </SafeAreaView>
  );
};

CartScreen.displayName = CartScreenNamespace;
CartScreen.defaultProps = CartScreenDefaultProps;
export default CartScreen;
