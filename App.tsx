/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginComponent from './src/main/components/LoginComponent';
import HomeComponent from './src/main/components/HomeComponent';
import RegisterComponent from './src/main/components/RegisterComponent';
import ResertPasswordComponent from './src/main/components/ResetPasswordComponent';
import PersonalInfoComponent from './src/main/components/PersonalInfoComponent';
import NewUserCreatedComponent from './src/main/components/NewUserCreatedComponent';
import ItemDetailsComponent from './src/main/components/ItemDetailsComponent';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"          component={LoginComponent} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ResertPasswordComponent} options={{headerBackTitleVisible:false,title:"Reset your password",headerTitleAlign:"center"}}/>
        <Stack.Screen name="Home"           component={HomeComponent} options={{headerShown: false}}/>
        <Stack.Screen name="Register"       component={RegisterComponent} options={{headerBackTitleVisible:false, headerTitleAlign:"center"}}/>
        <Stack.Screen name="PersonalInfo"   component={PersonalInfoComponent} options={{headerBackVisible: false, title:"Personal Information", headerTitleAlign:"center"}}/>
        <Stack.Screen name="NewUserCreated" component={NewUserCreatedComponent} options={{headerBackVisible: false, title:"Congratulations!", headerTitleAlign:"center"}}/>
        <Stack.Screen name="ItemDetails"    component={ItemDetailsComponent} options={{headerBackTitleVisible:false, title:"Item Details", headerTitleAlign:"center"}}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}
