import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View } from 'react-native';
import Home from './Home';
import Analysis from './Analysis';
import Transaction from './Transaction';
import Categories from './Categories';
import Profile from './Profile';

const BottomTab = createMaterialBottomTabNavigator();

const Bottomtabnavigator = () => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <BottomTab.Navigator
      barStyle={{
        ...styles.barStyle,
        rippleColor: 'red', // Set ripple effect to red
      }}
      activeColor="#32CD32" // Active tab icon color (green)
      inactiveColor="lightgray" // Inactive tab icon color
      // shifting={true} // Enable shifting to apply tabBarColor
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarColor: '#32CD32', // Green background when focused
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Analysis"
        component={Analysis}
        options={{
          tabBarColor: '#32CD32', // Green background when focused
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search-dollar" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarColor: '#32CD32', // Green background when focused
          tabBarIcon: ({ color }) => (
            <Fontisto name="arrow-swap" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarColor: '#32CD32', // Green background when focused
          tabBarIcon: ({ color }) => (
            <Feather name="layers" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarColor: '#32CD32', // Green background when focused
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  </View>
);

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#DFF7E2', // Default bar color (optional, only if tabs aren't focused)
    height: 65, // Adjust height as needed
    borderTopLeftRadius: 50, // Add top-left corner radius
    borderTopRightRadius: 50, // Add top-right corner radius
    // overflow: 'hidden', // Ensure child views clip correctly
  },
});

export default Bottomtabnavigator;
