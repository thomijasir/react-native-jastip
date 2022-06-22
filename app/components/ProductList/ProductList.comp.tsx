import React, { FC, useMemo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { formatRupiah } from '../../utils/Currency';
import { limitString } from '../../utils/Helper';
import { shortDate } from '../../utils/Time';
import Style from './ProductList.style';

export type IProductListCompProps = {
  productList?: any;
  onPress: (id: string) => void;
};

export const ProductListCompDefaultProps = {
  productList: [],
};

export const ProductListCompNamespace = 'ProductListComp';

const ProductListComp: FC<IProductListCompProps> = ({
  productList,
  onPress,
}) => {
  const mapToProductList = useMemo(() => {
    return productList.map((item: any) => ({
      id: item.id,
      name: item.productName,
      picture: item.productImageUrl,
      price: item.price,
      date: item.openPreOrderDate,
      landed: item.sellerReturnDate,
    }));
  }, [productList]);

  return (
    <View style={Style().main}>
      {mapToProductList.map((dataItem: any) => {
        return (
          <TouchableOpacity
            style={Style().item}
            key={dataItem.id}
            activeOpacity={0.8}
            onPress={() => {
              onPress(dataItem.id);
            }}>
            <Image
              style={Style().itemImage}
              source={{ uri: dataItem.picture }}
            />
            <View style={Style().itemInfo}>
              <Text style={Style().itemName}>
                {limitString(dataItem.name, 23)}
              </Text>
              <Text style={Style().itemPrice}>
                {formatRupiah(dataItem.price)}
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
