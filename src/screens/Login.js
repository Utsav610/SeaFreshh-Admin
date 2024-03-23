import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images} from '../constants/Images';
import {SCREEN_HEIGHT} from '../constants/ConstantKey';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {FontSize, Fonts} from '../constants/Fonts';
import {Colors} from '../constants/Colors';
import {pixelSizeVertical} from '../constants/ResponsiveScreen';
import TextInputView from '../components/TextInputView';
import CustomButton from '../components/CustomButton';
import { navigate } from '../navigation/RootNavigation';

const MobileSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(10, '* Please enter 10 digit mobile number')
    .required('* Please enter mobile number'),
});

export default function Login() {

  return (
    <KeyboardAwareScrollView style={{flex: 1 , backgroundColor:Colors.white}}>
      <Image
        source={Images.Auth}
        style={{width: '100%', height: SCREEN_HEIGHT / 3}}
        resizeMode="cover"
      />
     <View style={{backgroundColor:Colors.white , borderTopLeftRadius:20 , borderTopRightRadius:20 , elevation:10}}>
     <Formik
        initialValues={{
          mobile: '',
        }}
        // validationSchema={MobileSchema}
        onSubmit={values => {
         navigate('Dashboard')
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View
            style={{
              paddingHorizontal: 20,
              
            }}>
            <Text
              style={{
                fontSize: FontSize.FS_35,
                fontFamily: Fonts.BOLD,
                color: Colors.black,
                marginBottom: pixelSizeVertical(30),
              }}>
              Welcome to seaFreshh
            </Text>
           
            <TextInputView
              containerStyle={{}}
              onChangeText={handleChange('mobile')}
              onBlur={handleBlur('mobile')}
              value={values.mobile}
              placeholder={'Email'}
              keyboardType={'number-pad'}
              maxLength={10}
              error={errors.mobile && touched.mobile && errors.mobile}
            />
             <TextInputView
              containerStyle={{}}
              onChangeText={handleChange('mobile')}
              onBlur={handleBlur('mobile')}
              value={values.mobile}
              placeholder={'Password'}
              keyboardType={'number-pad'}
              maxLength={10}
              error={errors.mobile && touched.mobile && errors.mobile}
            />
            <CustomButton
                title={'SEND OTP'}
                onPress={handleSubmit}
              />
          </View>
        )}
      </Formik>
      <Image source={Images.Wave} style={{width: '100%'}} resizeMode="cover" />
     </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
