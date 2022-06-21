import React, { FC, useEffect, useState } from 'react';
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
import { formatIDR } from '../../utils/Currency';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './Product.style';
import GS from '../../assets/styles/General';
import ButtonComp from '../../components/Button/Button.comp';

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
  const [state, mState] = useState({
    showModal: false,
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

  useEffect(() => {
    console.log('PRODUCT STATE: ', state);
  }, [state]);

  const handleAddToCart = () => {
    setState({ showModal: true });
  };

  const handlePositiveModal = () => {
    Toast.show('Product Added');
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  };

  const handleNegativeModal = () => {
    setState({ showModal: false });
  };

  return (
    <SafeAreaView style={Style().main}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={state.showModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setState({ showModal: !state.showModal });
        }}>
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
      <ScrollView>
        <Image
          style={Style().productImage}
          source={{ uri: 'https://picsum.photos/200/300' }}
        />
        <ContentArea>
          <Text style={Style().price}>{formatIDR(2500000)}</Text>
          <Text style={Style().desc}>
            {limitString(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              200,
            )}
          </Text>
          <View style={Style().productDate}>
            <Text>
              Open PO Until
              <Text style={GS.bold}> {shortDate('2022-07-30')}</Text>
            </Text>
            <Text>
              Return <Text style={GS.bold}>{shortDate('2022-08-10')}</Text>
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
                source={{ uri: 'https://picsum.photos/50' }}
              />
            </View>
            <View style={Style().rowInfo}>
              <Text style={Style().sellerName}>Thomi Binomo</Text>
              <Text>
                Online <Text style={GS.bold}>10 minutes ago</Text>
              </Text>
              <Text>
                Location : <Text style={GS.bold}>Singapore</Text>
              </Text>
            </View>
            <View style={Style().rowRating}>
              <Image source={require('../../assets/icons/star-icon.png')} />
              <Text style={Style().ratingText}>4,8/5</Text>
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
