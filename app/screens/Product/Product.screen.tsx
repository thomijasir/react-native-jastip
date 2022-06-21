import React, { FC } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ContentArea from '../../components/ContentArea/ContentArea.comp';
import DeviderComp from '../../components/Devider/Devider.comp';
import { formatIDR } from '../../utils/Currency';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './Product.style';
import GS from '../../assets/styles/General';
import ButtonComp from '../../components/Button/Button.comp';

export type IProductScreenProps = {};

export const ProductScreenDefaultProps = {};

export const ProductScreenNamespace = 'ProductScreen';

const ProductScreen: FC<IProductScreenProps> = () => {
  return (
    <SafeAreaView style={Style().main}>
      <ScrollView>
        <View>
          <Image
            style={Style().productImage}
            source={{ uri: 'https://picsum.photos/200/300' }}
          />
        </View>
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
        <ContentArea>
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
                onPress={() => {
                  console.log('Mancing Mania Mantap');
                }}
                style="btn primary doubleRounded"
                title="Pencet Aku Mas!"
              />
            </View>
          </View>
        </ContentArea>
      </ScrollView>
    </SafeAreaView>
  );
};

ProductScreen.displayName = ProductScreenNamespace;
ProductScreen.defaultProps = ProductScreenDefaultProps;
export default ProductScreen;
