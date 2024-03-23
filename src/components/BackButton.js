import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants/Colors';
import {goBack} from '../navigation/RootNavigation';
import {FontSize, Fonts} from '../constants/Fonts';

export default function BackButton({onPress, styles, title = '' , textStyle}) {
  console.log('oofer', title);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        style={[
          {
            backgroundColor: Colors.white,
            padding: 2,
            borderRadius: 20,
            elevation: 5,
            shadowColor: Colors.black,
            shadowOpacity: 0.26,
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 10,
            marginRight: 10,
          },
          {...styles},
        ]}
        onPress={() => {
          goBack();
        }}>
        <Icon name={'chevron-left'} size={30} color={Colors.black} />
      </TouchableOpacity>
      <Text
        style={[{
          fontFamily: Fonts.MEDIUM,
          fontSize: FontSize.FS_22,
          letterSpacing: 0.8,
          // color: Colors.white,
        },{...textStyle}]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
