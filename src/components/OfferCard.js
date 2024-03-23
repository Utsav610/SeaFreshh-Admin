import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function OfferCard() {
  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: 150,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 3,
        marginVertical: 10,
      }}>
      <Icon
        name={'dots-vertical'}
        size={30}
        color={Colors.black}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      />
      <Text>30% OFF</Text>
      <Text>On order Above 300</Text>
      <View
        style={{
          borderWidth: 1,
          width: '50%',
          alignItems: 'center',
          borderStyle: 'dashed',
        }}>
        <Text>FIRST ORDER</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
