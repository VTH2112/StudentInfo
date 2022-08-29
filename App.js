import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StudentInfo } from 'data/Data'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import InputScreen from './screens/inputScreen';
import RenderScreen from './screens/renderScreen'
import { Provider } from 'react-redux';
import { store } from './src/redux/store'
const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 65,
              paddingTop: 10,
              borderTopWidth: 0,
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              position: 'absolute',
              elevation: 0,
            },
            tabBarLabelStyle: {
              marginBottom: 5,
              paddingBottom: 5,
              fontSize: 10,
              fontWeight: "bold",
            },
            tabBarActiveTintColor: "white",
            headerShown: false
          }}
        >
          <Tab.Screen name="Home" component={InputScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <MaterialCommunityIcons name="home" size={30} color={color} />
              },
            }}
          />
          <Tab.Screen name="Search" component={RenderScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="format-list-bulleted" size={30} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )

}

const styles = StyleSheet.create({

})

export default App;