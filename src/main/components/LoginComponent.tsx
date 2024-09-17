import React, { createContext, useCallback, useState } from "react"
import {
  Alert,
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Footer from "./Footer";
import Button from "./Button";
import Logo from "./Logo";
import { COLORS } from "../modules/constants";
import { IUser } from "../modules/types";
import Separator from "./Separator";


export default function LoginComponent ({navigation}:any): React.JSX.Element {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)
  
  const submit = useCallback(async ()=> {

    try {
      Keyboard.dismiss()

      if(!username||!password){
        Alert.alert("Please complete both fields")
        return;
      }
      
      await doLogin(username,password)
      navigation.navigate("Home")
    }
    catch(error){
      Alert.alert("Invalid user or password")
    }
    finally{
      setUsername("")
      setPassword("")
    }
  },[username,password])

  return (

    <SafeAreaView style={{flex:1,backgroundColor:COLORS.background}}>
        <View style={{flex:1}}>
          
          <View style={{flex:2,justifyContent:'center'}}>
            <Logo/>
          </View>

          <View style={{flex:0.3,marginLeft:10,marginRight:10,justifyContent:'space-evenly'}}>
            <TextInput 
              style={{
                paddingBottom: 0,
                paddingVertical: 10,
                alignItems: 'center',
                fontSize:18,
                flex:1
              }}
              accessibilityLabel="emailField"
              testID="emailField"
              placeholder="Email"
              value={username}
              autoCapitalize='none' 
              keyboardType="email-address"
              maxLength={40}
              onChangeText={setUsername}
              textAlign='left'
            />
            <Separator/>
          </View>

          <View style={{flex:0.1}}/>    

          <View style={{flex:0.3,marginLeft:10,marginRight:10}}>
            <TextInput
              style={{
                paddingBottom: 0,
                paddingVertical: 18,
                //borderWidth: 1,
                //borderRadius: 12,
                alignItems: 'center',
                fontSize:18,
                justifyContent: 'center',
                flex:1
              }}
              secureTextEntry={showPassword} 
              accessibilityLabel="passwordField"
              testID="passwordField"
              placeholder="Password"
              value={password}
              maxLength={20}
              textAlign='left'
              onChangeText={setPassword}
            />

            <TouchableOpacity
              testID="showPassword"
              accessibilityLabel="showPassword"
              onPress={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          right: 12,
                          top: 8
                        }}>
                  {
                    showPassword == true ? (
                      <Image 
                      style={{ alignSelf:'center',  width: 25,
                      height: 25,
                      top:3
                      }} 
                      source={require('../../resources/hide.png')}  />
                    ) : (
                      <Image 
                      style={{ alignSelf: 'center',  width: 25,
                      top:3,  
                      height: 25 }}
                      source={require('../../resources/view.png')}  />
                      )
                  }
            </TouchableOpacity>
            <Separator/>
          </View>       

          <View style={{flex:0.1}}/>    

          <View style={{flex:0.5,justifyContent:'center', marginLeft:10,marginRight:10}}>
            <Button
              title="Login"
              testID="loginButton"
              accessibilityLabel="loginButton"
              onPress={submit}
              filled
              style={{
                marginTop: 0,
                marginBottom: 0
              }}
            >
            </Button>
          </View>
          
          <View style={{flex:0.5,flexDirection: 'row',justifyContent: 'space-around'}}>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate("Register")}}
              accessibilityLabel="registerButton"
              testID="registerButton">
              <View> 
                <Text style={{color:COLORS.primary}}>Register</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={()=>{navigation.navigate("ForgotPassword")}}
              accessibilityLabel="forgotPasswordButton"
              testID="forgotPasswordButton">
              <View > 
                <Text style={{color:COLORS.primary}} >Forgot Password?</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={{flex:0.5,justifyContent:'flex-end'}}>
            <Footer/>
          </View>
        </View>
    </SafeAreaView>
    )
  }

/**
 * TODO: implement later
 * @param username 
 * @param password 
 * @returns 
 */
async function doLogin(username:string,password:string) {
  if(!username.includes("johndoe@email.com")) {
    throw new Error("invalid user")
  }
  if(!password.includes("123")) {
    throw new Error("invalid password")
  }
  return true
}