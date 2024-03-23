import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../constants/Images';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../constants/ResponsiveScreen';
import {FontSize, Fonts} from '../constants/Fonts';
import {Colors} from '../constants/Colors';
import CustomButton from './CustomButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProductCard({containerstyle}) {
  return (
    <View style={[styles.cardContainer,{...containerstyle}]}>
      <Image
        source={Images.Product}
        style={{
          //   width: 150,
          height: 200,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        resizeMode="stretch"
      />
      <View style={{paddingHorizontal: 5}}>
        <Text style={{fontFamily: Fonts.MEDIUM}}>Surmani Fish - Curry Cut</Text>
        <Text style={{fontFamily: Fonts.REGULAR, fontSize: FontSize.FS_13}}>
          Surmani Fish - Curry Cut
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View
            style={{
              borderWidth: 0.5,
              borderRadius: 5,
              paddingHorizontal: pixelSizeHorizontal(5),
              paddingVertical: pixelSizeVertical(5),
            }}>
            <Text style={{fontSize: FontSize.FS_13}}>Sumai</Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderRadius: 5,
              paddingHorizontal: pixelSizeHorizontal(5),
              paddingVertical: pixelSizeVertical(5),
              marginHorizontal: pixelSizeHorizontal(5),
            }}>
            <Text style={{fontSize: FontSize.FS_13}}>Size : 3KG</Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderRadius: 5,
              paddingHorizontal: pixelSizeHorizontal(5),
              paddingVertical: pixelSizeVertical(5),
            }}>
            <Text style={{fontSize: FontSize.FS_13}}>Seafood</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontFamily: Fonts.BOLD,
              fontSize: FontSize.FS_18,
              color: Colors.black,
            }}>
            ₹ 420/KG
          </Text>
          <Text>Category : Fish</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 10,
            padding: 5,
          }}>
          <Icon name={'file-edit'} size={24} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 10,
            padding: 5,
          }}>
          <Icon name={'trash-can'} size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    elevation: 5,
    backgroundColor: Colors.white,
    marginBottom: 10,
    marginRight: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
