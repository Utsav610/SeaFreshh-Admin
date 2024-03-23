import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../components/BackButton';
import OfferCard from '../components/OfferCard';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/ConstantKey';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigate} from '../navigation/RootNavigation';

export default function Offer() {
  const [isVisible, setisVisible] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Colors.white, paddingHorizontal: 20}}>
      <BackButton title="Offers" textStyle={{color: Colors.black}} />
      <FlatList
        data={[1, 1, 1]}
        renderItem={() => {
          return <OfferCard />;
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 40,
          right: 40,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            padding: 5,
            borderRadius: 30,
          }}
          onPress={() => {
            navigate('Create Offer');
          }}>
          <Icon name={'plus'} size={50} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
