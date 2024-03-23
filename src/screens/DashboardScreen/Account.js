import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../constants/Colors';
import { navigate } from '../../navigation/RootNavigation';

export default function Account() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <TouchableOpacity onPress={()=>{navigate('Offer')}}>
        <Text>Offer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
