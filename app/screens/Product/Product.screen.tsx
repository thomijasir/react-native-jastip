import React, { FC, useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { RouteProp } from '@react-navigation/native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import ContentArea from '../../components/ContentArea/ContentArea.comp';
import DeviderComp from '../../components/Devider/Devider.comp';
import { formatIDRNoDecimal } from '../../utils/Currency';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './Product.style';
import GS from '../../assets/styles/General';
import ButtonComp from '../../components/Button/Button.comp';
import { AppContext } from '../../stores/AppProvider';
import { SET_CARTS } from '../../stores/AppReducers';

type RootStackParamList = {
  productId: any;
};

export type IProductScreenProps = {
  route: RouteProp<RootStackParamList>;
  navigation: NavigationHelpers<ParamListBase>;
};

export const ProductScreenDefaultProps = {};

export const ProductScreenNamespace = 'ProductScreen';

const ProductScreen: FC<IProductScreenProps> = ({ route, navigation }) => {
  const context = useContext(AppContext);

  const [state, mState] = useState({
    showModal: false,
    productData: {
      product: {
        id: 1,
        productName: 'Adidas All-Star',
        productDescription: 'Adidas shoes blyat',
        price: 10000,
        openPreOrderDate: '2022-07-07',
        sellerReturnDate: '2022-07-11',
        productImageUrl: 'https://picsum.photos/200/300',
      },
      user: {
        id: 1,
        name: 'Thomi Jasir',
        location: 'Singapore',
        rating: '4,5',
        lastOnline: '10 minutes ago',
        picture: 'https://picsum.photos/50',
      },
    },
  });

  const setState = (obj: any) => {
    mState((prevState: any) => ({
      ...prevState,
      ...obj,
    }));
  };

  useEffect(() => {
    console.log('PRODUCT DETAILS: ', route.params?.productId);
  }, []);

  const handleAddToCart = () => {
    setState({ showModal: true });
  };

  const handlePositiveModal = () => {
    const getId = state.productData.product.id;
    const newProduct = [...context.carts];
    const cartData = {
      ...state.productData,
      id: getId,
    };
    const indexId = newProduct.findIndex((x: any) => x.id === getId);
    if (indexId < 0) {
      newProduct.push(cartData);
      context.setContext(newProduct, SET_CARTS);
      Toast.show('Product Added');
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    } else {
      Toast.show('Product already in the cart.');
    }
  };

  const handleNegativeModal = () => {
    setState({ showModal: false });
  };

  const renderModal = () => (
    <Modal animationType="fade" transparent={true} visible={state.showModal}>
      <View style={Style().centeredView}>
        <View style={Style().modalView}>
          <Text style={Style().spacingTextModal}>Add Product to Cart</Text>
          <View style={Style().modalBtn}>
            <View style={Style().rowModalBtnLeft}>
              <ButtonComp
                style="btn outlineBlack rounded"
                title="Cancel"
                onPress={handleNegativeModal}
              />
            </View>
            <View style={Style().rowModalBtnRight}>
              <ButtonComp
                style="btn primary rounded"
                title="add"
                onPress={handlePositiveModal}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={Style().main}>
      {renderModal()}
      <ScrollView>
        <Image
          style={Style().productImage}
          source={{ uri: 'https://picsum.photos/200/300' }}
        />
        <ContentArea>
          <Text style={Style().price}>
            {formatIDRNoDecimal(state.productData.product.price)}
          </Text>
          <Text style={Style().desc}>
            {limitString(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              200,
            )}
          </Text>
          <View style={Style().productDate}>
            <Text>
              Open PO Until{' '}
              <Text style={GS.bold}>
                {shortDate(state.productData.product.openPreOrderDate)}
              </Text>
            </Text>
            <Text>
              Return{' '}
              <Text style={GS.bold}>
                {shortDate(state.productData.product.sellerReturnDate)}
              </Text>
            </Text>
          </View>
        </ContentArea>
        <DeviderComp />
        <ContentArea>
          <Text style={Style().titleDesc}>Product Description :</Text>
          <Text style={Style().productDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
            morbi diam urna semper ultrices neque.
          </Text>
          <Text style={Style().productMore}>View More</Text>
        </ContentArea>
        <DeviderComp />
        <ContentArea>
          <View style={Style().sellerProfile}>
            <View style={Style().rowImage}>
              <Image
                style={Style().profileImage}
                source={{ uri: state.productData.user.picture }}
              />
            </View>
            <View style={Style().rowInfo}>
              <Text style={Style().sellerName}>
                {state.productData.user.name}
              </Text>
              <Text>
                Online{' '}
                <Text style={GS.bold}>{state.productData.user.name}</Text>
              </Text>
              <Text>
                Location :{' '}
                <Text style={GS.bold}>{state.productData.user.location}</Text>
              </Text>
            </View>
            <View style={Style().rowRating}>
              <Image source={require('../../assets/icons/star-icon.png')} />
              <Text style={Style().ratingText}>
                {state.productData.user.rating}/5
              </Text>
            </View>
          </View>
        </ContentArea>
        <DeviderComp />
      </ScrollView>
      <View style={Style().footerControl}>
        <TouchableOpacity
          style={Style().chatBtn}
          activeOpacity={0.8}
          onPress={() => {
            console.log('Mantap!');
          }}>
          <Image source={require('../../assets/icons/chat-icon.png')} />
        </TouchableOpacity>
        <View style={Style().orderBtn}>
          <ButtonComp
            onPress={handleAddToCart}
            style="btn primary doubleRounded"
            title="Add To Cart!"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

ProductScreen.displayName = ProductScreenNamespace;
ProductScreen.defaultProps = ProductScreenDefaultProps;
export default ProductScreen;
