import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontSize, Fonts } from '../constants/Fonts';
import { Colors } from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/DashboardScreen/Home';
import Account from '../screens/DashboardScreen/Account';
import Activity from '../screens/DashboardScreen/Activity';
import AllProduct from '../screens/AllProduct';
import Offer from '../screens/Offer';
import CreateOffer from '../screens/CreateOffer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTabs() {
  
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: '#A6A6A6',
          tabBarStyle: {
            backgroundColor: Colors.white,
            height: 60,
            borderRadius: 20,
            elevation: 0,
          },
          tabBarLabelStyle: {
            fontFamily: Fonts.SEMIBOLD,
            fontSize: FontSize.FS_12,
            marginBottom: 5,
          },
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name={'Home'}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size, focused}) => (
              <Icon name={'view-dashboard-outline'} size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name={'Activity'}
          component={Activity}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size, focused}) => (
              <View style={{backgroundColor:Colors.primary , padding:4 , borderRadius:5}}>
                <Icon name={'plus'} size={24} color={Colors.white} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name={'Account'}
          component={Account}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size, focused}) => (
              <Icon name={'account-circle-outline'} size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={HomeTabs} />
      <Stack.Screen name="AllProduct" component={AllProduct} />
      <Stack.Screen name="Offer" component={Offer} />
      <Stack.Screen name="Create Offer" component={CreateOffer} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
