import React from 'react';
import { SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/Home/HomeScreen';
import Reserve from '../screens/Reserve/Reserve';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSmile from '../../assets/icons/HomeSmile';
import MeetingRoom from '../../assets/icons/MeetingRoom';
import Check from '../../assets/icons/Check';
import User from '../../assets/icons/User';
import CheckActive from '../../assets/icons/CheckActive';
import SingleItemScreen from '../screens/SingleItem/SingleItemScreen';
import StatusBookScreen from '../screens/StatusBook/StatusBookScreen';
import MeetScreen from '../screens/Meet/MeetScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

 function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle:{
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          paddingTop: 10,
          paddingBottom: 20,
          height: 71,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Клуб',
          tabBarIcon: ({ color, size }) => (
            <HomeSmile color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Meet"
        component={MeetScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Встречи',
          tabBarIcon: ({ color, size }) => (
              <MeetingRoom color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Reserve"
        component={Reserve}
        options={{
          headerShown: false,
          tabBarLabel: 'Резерв',
          tabBarIcon: ({ color, size,focused}) => (
            focused ? <CheckActive /> : <Check color={color} />
          ),
          }}
      />
      <Tab.Screen
        name="User"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Профиль',
          tabBarIcon: ({ color, size }) => (
            <User color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName='HomeTab'>
      <Stack.Screen name="HomeTab" options={{ headerShown: false }} component={BottomTabs} />
      <Stack.Screen name="ReserveTab" options={{ headerShown: false }} component={BottomTabs} />
      <Stack.Screen name="SingleItem" options={{ headerShown: false }} component={SingleItemScreen} />
      <Stack.Screen name="StatusBook" options={{ headerShown: false }} component={StatusBookScreen} />
    </Stack.Navigator>
  );
}


 export default function AppContainer() {
  return(
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <MainNavigator />
          </SafeAreaView>
      </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;