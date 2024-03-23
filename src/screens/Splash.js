import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { resetScreen } from '../navigation/RootNavigation'
import { Images } from '../constants/Images'

export default function Splash() {
    useEffect(()=>{
        setTimeout(()=>{
            resetScreen('Login')
        },2000)
      },[])
  return (
    <View>
      <Image
      source={Images.Splash}
      style={{width:'100%' , height:'100%'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({})