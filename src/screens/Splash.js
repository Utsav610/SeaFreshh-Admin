import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { resetScreen } from '../navigation/RootNavigation'

export default function Splash() {
    useEffect(()=>{
        setTimeout(()=>{
            resetScreen('Login')
        },2000)
      },[])
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

const styles = StyleSheet.create({})