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
  Pressable,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { RouteProp } from '@react-navigation/native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import ContentArea from '../../components/ContentArea/ContentArea.comp';
import DeviderComp from '../../components/Devider/Devider.comp';
import { formatRupiah } from '../../utils/Currency';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './Product.style';
import GS from '../../assets/styles/General';
import ButtonComp from '../../components/Button/Button.comp';
import { AppContext } from '../../stores/AppProvider';
import { SET_CARTS } from '../../stores/AppReducers';
import useApi from '../../hooks/useApi';

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

  const client = useApi();

  const [state, mState] = useState({
    showModal: false,
    showMore: false,
    productData: {
      product: {
        id: 1,
        productName: '',
        productDescription: '',
        price: 0,
        openPreOrderDate: '',
        sellerReturnDate: '',
        productImageUrl: 'https://picsum.photos/200/300',
      },
      user: {
        id: 1,
        name: '',
        location: '',
        rating: '',
        lastOnline: '',
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
    client.getProductDetail(route.params?.productId).then((res) => {
      setState({
        productData: {
          product: {
            id: res.id,
            productName: res.productName,
            productDescription: res.productDescription,
            price: res.price,
            openPreOrderDate: res.openPreOrderDate,
            sellerReturnDate: res.sellerReturnDate,
            productImageUrl: res.productImageUrl,
          },
          user: {
            id: res.seller.id,
            name: res.seller.name,
            location: res.seller.location,
            rating: res.seller.rating,
            lastOnline: res.seller.lastOnline,
            picture: res.seller.imageUrl,
          },
        },
      });
    });
  }, []);

  const handleAddToCart = () => {
    setState({ showModal: true });
  };

  const handlePositiveModal = () => {
    const getId = state.productData.product.id;
    const newProduct = [...context.carts];
    const cartData = {
      ...state.productData,
      productQty: 1,
      id: getId,
    };
    const indexId = newProduct.findIndex((x: any) => x.id === getId);
    if (indexId < 0) {
      newProduct.push(cartData);
      context.setContext(newProduct, SET_CARTS);
      Toast.show('Product added');
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    } else {
      newProduct[indexId].productQty += 1;
      context.setContext(newProduct, SET_CARTS);
      Toast.show('Product add more to cart');
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
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
          source={{ uri: state.productData.product.productImageUrl }}
        />
        <ContentArea>
          <Text style={Style().price}>
            {formatRupiah(state.productData.product.price.toString())}
          </Text>
          <Text style={Style().desc}>
            {state.productData.product.productName}
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
            {state.showMore
              ? state.productData.product.productDescription
              : limitString(state.productData.product.productDescription, 200)}
          </Text>
          <Pressable
            onPress={() => {
              setState({ showMore: !state.showMore });
            }}>
            <Text style={Style().productMore}>View More</Text>
          </Pressable>
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
                {state.productData.user.rating} / 5
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
