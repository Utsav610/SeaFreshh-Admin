import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderView from '../components/HeaderView';
import {Images} from '../constants/Images';
import BackButton from '../components/BackButton';
import {Colors} from '../constants/Colors';

export default function AllProduct() {
  return (
    <HeaderView>
      <Image source={Images.HeaderImage} />
      {/* <Text style={{position: 'absolute', bottom: 0}}>Product</Text> */}
      <View style={{position: 'absolute', bottom: 30, left: 20}}>
        <BackButton
          styles={{}}
          title={'All Product'}
          textStyle={{color: Colors.white}}
        />
      </View>
    </HeaderView>
  );
}

const styles = StyleSheet.create({});
