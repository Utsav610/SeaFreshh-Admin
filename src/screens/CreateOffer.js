import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../components/BackButton';
import {Formik} from 'formik';
import * as yup from 'yup';
import CustomButton from '../components/CustomButton';
import TextInputView from '../components/TextInputView';
import {pixelSizeHorizontal} from '../constants/ResponsiveScreen';

const CouponSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  expiryDate: yup.string().required('Expiry date is required'),
  discountCode: yup.string().required('Discount code is required'),
});

export default function CreateOffer() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: pixelSizeHorizontal(20),
      }}>
      <View style={{marginBottom: pixelSizeHorizontal(30)}}>
        <BackButton styles={{}} title={'Create Offer'} />
      </View>
      <Formik
        initialValues={{
          title: '',
          description: '',
          expiryDate: '',
          discountCode: '',
        }}
        // validationSchema={CouponSchema}
        onSubmit={() => {
          console.log('submit');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInputView
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              placeholder="Title"
              style={styles.input}
              error={errors.title && touched.title && errors.title}
            />

            <TextInputView
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              placeholder="Description"
              style={styles.input}
              error={
                errors.description && touched.description && errors.description
              }
            />

            <TextInputView
              onChangeText={handleChange('expiryDate')}
              onBlur={handleBlur('expiryDate')}
              value={values.expiryDate}
              placeholder="Expiry Date"
              style={styles.input}
              //   error={errors.mobile && touched.mobile && errors.mobile}
            />

            <TextInputView
              onChangeText={handleChange('discountCode')}
              onBlur={handleBlur('discountCode')}
              value={values.discountCode}
              placeholder="Discount Code"
              style={styles.input}
              error={
                errors.discountCode &&
                touched.discountCode &&
                errors.discountCode
              }
            />

            <CustomButton title={'Create Offer'} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
