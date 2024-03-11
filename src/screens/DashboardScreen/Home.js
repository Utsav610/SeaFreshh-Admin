import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Images} from '../../constants/Images';
import {FontSize, Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../constants/ResponsiveScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderView from '../../components/HeaderView';
import ProductCard from '../../components/ProductCard';

export default function Home() {
  return (
    // <KeyboardAwareScrollView style={styles.container}>
    //  <View>
    //  <Image
    //     source={Images.Home_banner}
    //     style={{ width: '100%', height: 200 }}
    //     resizeMode="cover"
    //   />
    //   <View style={styles.searchContainer}>
    //     <Icon name={'magnify'} size={24} color={Colors.primary} style={styles.icon} />
    //     <TextInput placeholder="Search..." style={styles.input} />
    //   </View>
    //  </View>
    //   <Text
    //     style={{
    //       fontSize: FontSize.FS_25,
    //       fontFamily: Fonts.SEMIBOLD,
    //       textAlign: 'center',
    //       color: Colors.black,
    //       marginVertical: pixelSizeVertical(10),
    //     }}>
    //     Welcome to the seafreshh!
    //   </Text>
    // </KeyboardAwareScrollView>
    <HeaderView>
      <View>
        <Image
          source={Images.Home_banner}
          style={{width: '100%', height: 230}}
          resizeMode="cover"
        />
        <View style={styles.searchContainer}>
          <Icon
            name={'magnify'}
            size={24}
            color={Colors.primary}
            style={styles.icon}
          />
          <TextInput placeholder="Search..." style={styles.input} />
        </View>
      </View>
      <View style={{paddingHorizontal: pixelSizeHorizontal(20)}}>
        <Text
          style={{
            fontSize: FontSize.FS_25,
            fontFamily: Fonts.SEMIBOLD,
            textAlign: 'center',
            color: Colors.black,
            marginVertical: pixelSizeVertical(10),
          }}>
          Welcome to the seafreshh!
        </Text>
        <Text
          style={{
            fontFamily: Fonts.SEMIBOLD,
            fontSize: FontSize.FS_16,
            color: Colors.black,
          }}>
          All Product
        </Text>
        <ProductCard/>
      </View>
    </HeaderView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Colors.white,
    width: '90%',
    borderRadius: 20,
    paddingHorizontal: 15,
    bottom: 80,
    left: '5%', // Adjust as needed
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: Colors.black,
  },
});
