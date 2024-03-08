import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {pixelSizeHorizontal, widthPixel} from '../constants/ResponsiveScreen';

export default function HeaderView({
  children,
  onPress = {},
  containerStyle = {},
}) {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={Colors.transparent}
      />
      <ScrollView
        style={styles.container}
        // contentContainerStyle={{flexGrow: 1}}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView style={{flex: 1}}></SafeAreaView>
        <View style={[styles.mainView, {...containerStyle}]}>{children}</View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.offWhite,
  },
  mainView: {
    flex: 1,
    backgroundColor: Colors.offWhite,
    borderRadius: widthPixel(25),
  },
});
