import React, { FC, useContext, useState, useEffect, useMemo } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import Toast from 'react-native-simple-toast';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import ContentArea from '../../components/ContentArea/ContentArea.comp';
import DeviderComp from '../../components/Devider/Devider.comp';
import ButtonComp from '../../components/Button/Button.comp';
import { formatIDRNoDecimal } from '../../utils/Currency';
import Style from './Payment.style';
import GS from '../../assets/styles/General';
import { AppContext } from '../../stores/AppProvider';
import { SET_CARTS } from '../../stores/AppReducers';
import { DELIVERY_FEE, EXPEDITION_ENUM } from '../../constants';

export type IPaymentScreenProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const PaymentScreenDefaultProps = {};

export const PaymentScreenNamespace = 'PaymentScreen';

const PaymentScreen: FC<IPaymentScreenProps> = ({ navigation }) => {
  const context = useContext(AppContext);

  const [state, mState] = useState({
    cartList: context.carts,
    deliveryFee: DELIVERY_FEE[Math.floor(Math.random() * 6)],
    adminFee: 2000,
  });

  useEffect(() => {
    context.setContext(state.cartList, SET_CARTS);
  }, [state.cartList]);

  const totalProductPrice = useMemo(() => {
    const { cartList } = state;
    let totalAmount = 0;
    for (let i = 0; i < cartList.length; i++) {
      const item = cartList[i];
      const getPrice = item.product.price;
      totalAmount += getPrice * item.productQty;
    }
    return totalAmount;
  }, [state.cartList]);

  const totalPaymentAmount = useMemo(() => {
    const { deliveryFee, adminFee } = state;
    return totalProductPrice + deliveryFee + adminFee;
  }, [totalProductPrice]);

  const setState = (obj: any) => {
    mState((prevState: any) => ({
      ...prevState,
      ...obj,
    }));
  };

  const handlePay = () => {
    setState({ cartList: [] });
    navigation.navigate('PaymentResult');
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
      if (newCartList[getIndex].productQty <= 0) {
        newCartList[getIndex].productQty = 1;
      } else {
        newCartList[getIndex].productQty -= 1;
      }
    }
    setState({ cartList: newCartList });
  };

  const renderItem = (cartList: any) => {
    return cartList.map((cart: any, index: number) => {
      const getItemStyle = [Style().item, Style().itemBorderBottom];
      if (cartList.length - 1 === index) {
        getItemStyle.pop();
      }
      return (
        <View style={getItemStyle} key={cart.id}>
          <View style={Style().nameInfo}>
            <View style={Style().rowImage}>
              <Image
                style={Style().profileImage}
                source={{ uri: cart.user.picture }}
              />
            </View>
            <Text style={Style().nameText}>{cart.user.name}</Text>
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
                {formatIDRNoDecimal(cart.product.price)}
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
          </View>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={Style().main}>
      <ScrollView>
        <ContentArea>
          <View style={Style().items}>{renderItem(state.cartList)}</View>
        </ContentArea>
        <DeviderComp />
        <ContentArea>
          <Text style={Style().paymentTitle}>Payment Summary :</Text>
          <View style={Style().rowPayment}>
            <View style={Style().colPayment}>
              <Text>Products Price</Text>
              <Text style={GS.bold}>
                {formatIDRNoDecimal(totalProductPrice)}
              </Text>
            </View>
            <View style={Style().colPayment}>
              <Text>Delivery Fee</Text>
              <Text style={GS.bold}>
                {formatIDRNoDecimal(state.deliveryFee)}
              </Text>
            </View>
            <View style={Style().colPayment}>
              <Text>Platform Fee</Text>
              <Text style={GS.bold}>{formatIDRNoDecimal(state.adminFee)}</Text>
            </View>
            <View style={Style().colPayment}>
              <DeviderComp />
            </View>
            <View style={[Style().colPayment]}>
              <Text style={GS.bold}>Total Payment</Text>
              <Text style={GS.bold}>
                {formatIDRNoDecimal(totalPaymentAmount)}
              </Text>
            </View>
          </View>
        </ContentArea>
      </ScrollView>
      <View>
        <DeviderComp />
        <ContentArea>
          <View style={Style().spacingFooter}>
            <View style={Style().footerImage}>
              <Image
                source={require('../../assets/icons/dana-logo-round-icon.png')}
              />
            </View>
            <View style={Style().footerText}>
              <Text>Dana Balance</Text>
              <Text style={Style().textBalance}>
                {formatIDRNoDecimal(2500000)}
              </Text>
            </View>
            <View style={Style().footerBtn}>
              <ButtonComp
                style="btn primary doubleRounded"
                onPress={handlePay}
                title="Pay!"
              />
            </View>
          </View>
        </ContentArea>
      </View>
    </SafeAreaView>
  );
};

PaymentScreen.displayName = PaymentScreenNamespace;
PaymentScreen.defaultProps = PaymentScreenDefaultProps;
export default PaymentScreen;
