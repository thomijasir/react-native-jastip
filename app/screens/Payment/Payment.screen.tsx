import React, { FC } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import ContentArea from '../../components/ContentArea/ContentArea.comp';
import DeviderComp from '../../components/Devider/Devider.comp';
import ButtonComp from '../../components/Button/Button.comp';
import { formatIDR } from '../../utils/Currency';
import Style from './Payment.style';
import GS from '../../assets/styles/General';

export type IPaymentScreenProps = {
  navigation: NavigationHelpers<ParamListBase>;
};

export const PaymentScreenDefaultProps = {};

export const PaymentScreenNamespace = 'PaymentScreen';

const PaymentScreen: FC<IPaymentScreenProps> = ({ navigation }) => {
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
          </View>
        </View>
      );
    });
  };
  const handlePay = () => {
    navigation.navigate('PaymentResult');
  };
  const handleAdd = (id: any) => () => {
    console.log('ADD ID: ', id);
  };

  const handleDecrease = (id: any) => () => {
    console.log('DECRESE ID: ', id);
  };
  return (
    <SafeAreaView style={Style().main}>
      <ScrollView>
        <ContentArea>
          <View style={Style().items}>{renderItem(CART_LIST)}</View>
        </ContentArea>
        <DeviderComp />
        <ContentArea>
          <Text style={Style().paymentTitle}>Payment Summary :</Text>
          <View style={Style().rowPayment}>
            <View style={Style().colPayment}>
              <Text>Products Price</Text>
              <Text style={GS.bold}>{formatIDR(500000)}</Text>
            </View>
            <View style={Style().colPayment}>
              <Text>Delivery Fee</Text>
              <Text style={GS.bold}>{formatIDR(50000)}</Text>
            </View>
            <View style={Style().colPayment}>
              <Text>Platform Fee</Text>
              <Text style={GS.bold}>{formatIDR(2000)}</Text>
            </View>
            <View style={Style().colPayment}>
              <DeviderComp />
            </View>
            <View style={[Style().colPayment]}>
              <Text style={GS.bold}>Total Payment</Text>
              <Text style={GS.bold}>{formatIDR(2000)}</Text>
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
              <Text style={Style().textBalance}>{formatIDR(2500000)}</Text>
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
