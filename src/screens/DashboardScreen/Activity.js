import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderView from '../../components/HeaderView';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInputView from '../../components/TextInputView';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../../constants/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import {SCREEN_WIDTH} from '../../constants/ConstantKey';
import {Images} from '../../constants/Images';
import {FontSize, Fonts} from '../../constants/Fonts';
import Divider from '../../components/Divider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../components/CustomButton';

export default function Activity() {
  const [Loading, setIsLoading] = useState(false);
  const [productImage, SetProductImage] = useState([]);

  const UploadImage = () => {
    Alert.alert('Select from', 'Upload your profile picture', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Gallery',
        onPress: () => {
          setIsLoading(true);
          ImagePicker.openPicker({
            multiple: false,
            freeStyleCropEnabled: true,
            cropping: true,
            mediaType: 'photo',
            includeBase64: false,
            compressImageQuality: 0.7,
          })
            .then(images => {
              SetProductImage(prevImages => [...prevImages, images]);
              setIsLoading(false);
            })
            .catch(error => {
              setIsLoading(false);
              console.log(error);
            });
        },
      },
      {
        text: 'Camera',
        onPress: () => {
          setIsLoading(true);
          ImagePicker.openCamera({
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH,
            cropping: true,
            multiple: false,
            mediaType: 'photo',
            includeBase64: false,
            multipleShot: false,
            compressImageQuality: 0.7,
          })
            .then(images => {
              setIsLoading(false);
              SetProductImage(prevImages => [...prevImages, images]);
            })
            .catch(error => {
              setIsLoading(false);
              console.log(error);
            });
        },
        style: 'default',
      },
    ]);
  };

  const removeImage = index => {
    SetProductImage(prevImages => prevImages.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <KeyboardAwareScrollView style={{flexGrow: 1, paddingHorizontal: 20}}>
        <TouchableOpacity onPress={UploadImage}>
          <Image
            source={Images.IC_IMAGE_ADD}
            style={{width: '100%', height: 100, alignSelf: 'center'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: Fonts.MEDIUM,
            fontSize: FontSize.FS_13,
            textAlign: 'center',
          }}>
          Click the Button for Uploading Images
        </Text>
        <Divider
          style={{
            marginVertical: 10,
            borderWidth: 2.5,
            borderColor: Colors.grey,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {productImage.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={{position: 'relative', marginRight: 10, marginBottom: 10}}
              onPress={() => {
                Linking.openURL(image.path);
              }}>
              <Image
                source={Images.IC_JPG}
                style={{width: 50, height: 50}}
                resizeMode="contain"
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  backgroundColor: Colors.primary,
                  borderRadius: 15,
                }}
                onPress={() => removeImage(index)}>
                <Icon name={'close'} size={20} color={Colors.white} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.text}>Name</Text>
        <TextInputView
          containerStyle={{borderWidth: 0.5, borderColor: Colors.black}}
        />
        <Text style={styles.text}>Discription</Text>
        <TextInputView
          textAlignVertical="top"
          containerStyle={{borderWidth: 0.5, borderColor: Colors.black}}
          multiline={true}
          numberOfLines={6}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '47%'}}>
            <Text style={styles.text}>Price</Text>
            <TextInputView
              containerStyle={{borderWidth: 0.5, borderColor: Colors.black}}
            />
          </View>
          <View style={{width: '47%'}}>
            <Text style={styles.text}>Weight</Text>
            <TextInputView
              containerStyle={{borderWidth: 0.5, borderColor: Colors.black}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '47%'}}>
            <Text style={styles.text}>Price</Text>
            <TextInputView
              containerStyle={{borderWidth: 0.5, borderColor: Colors.black}}
            />
          </View>
          <View style={{width: '47%'}}>
            <Text style={styles.text}>Weight</Text>
            <TextInputView
              containerStyle={{borderWidth: 0.5, borderColor: Colors.black}}
            />
          </View>
        </View>
        <CustomButton title={'Enter'} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.FS_18,
    color: Colors.black,
  },
});
