import React, { useCallback, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Alert, Image, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, View } from "react-native"
import Footer from "./Footer"
import Separator from "./Separator"
import { IUser } from "../modules/types"
import { COLORS } from "../modules/constants"
import Button from "./Button"


export default function RegisterComponent({navigation}:any): React.JSX.Element {
    
    const [newUser,setUser] = useState<IUser>() 

    const [password, setPassword]         = useState("")
    const [showPassword, setShowPassword] = useState(true)
    const [firstName, setFirstName]       = useState("")
    const [lastName, setLastName]         = useState("")
    const [email, setEmail]               = useState("")

    
    const submit = useCallback(async ()=> {
      
      try{  
        Keyboard.dismiss()

        if(!firstName||!lastName||!password||!email) {
          Alert.alert("Please complete all fields")
          return
        }

        //TODO: validate email format and password requirements here
        //TODO: validate in backend that email is available

        setUser({
          firstName: firstName,
          lastName: lastName,
          password: password,
          email: email,
          id: ""
        })
          
        setEmail("")
        setFirstName("")
        setLastName("")
        setPassword("")

        navigation.navigate("PersonalInfo",{
          newUser
        })
      } catch(error) {
        console.log(error)
      }
    },[firstName,lastName,password,email])

    return(
      <SafeAreaView style={{backgroundColor:COLORS.background,flex:1}}>
        <View style={{flex:1}}>
      
          <View style={{flex:0.5,justifyContent:'center',margin:20}}>
            <Image 
              style= {{
                resizeMode: 'cover', 
                width: 100, 
                height: 100
              }} 
              source={require('../../resources/swirl.png')} 
            />
          </View>

          <View style={{flex:0.3,marginLeft:20,marginRight:20,justifyContent:'space-evenly'}}>
            <TextInput 
              style={{
                paddingBottom: 0,
                paddingVertical: 18,
                alignItems:'center',
                fontSize:18,
                flex:1
              }}
              testID="emailField"
              accessibilityLabel="emailField"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize='none' 
              value={email}
              maxLength={40}
              onChangeText={setEmail}
              textAlign='left'
            />
            <Separator/>
          </View>

          <View style={{flex:0.3,marginLeft:20,marginRight:20,justifyContent: 'space-evenly'}}>
            <TextInput 
              style={{
                paddingBottom: 0,
                paddingVertical: 18,
                alignItems:'center',
                fontSize:18,
                flex:1
              }}
              accessibilityLabel="firstNameField"
              testID="firstNameField"
              placeholder="First Name"
              autoCapitalize='words' 
              value={firstName}
              maxLength={40}
              onChangeText={setFirstName}
              textAlign='left'
            />
            <Separator/>
          </View>

          <View style={{flex:0.3,marginLeft:20,marginRight:20,justifyContent: 'space-evenly'}}>
            <TextInput 
              style={{
                paddingBottom: 0,
                paddingVertical: 18,
                alignItems:'center',
                fontSize:18,
                flex:1
              }}
              accessibilityLabel="lastNameField"
              testID="lastNameField"
              placeholder="Last Name"
              autoCapitalize='words' 
              value={lastName}
              maxLength={40}
              onChangeText={setLastName}
              textAlign='left'
            />
            <Separator/>
          </View>
      
          <View style={{flex:0.3,marginLeft:20,marginRight:20,justifyContent:'space-evenly'}}>
            <TextInput
              style={{
                paddingBottom: 0,
                paddingVertical: 18,
                alignItems:'center',
                fontSize:18,
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
                          top: 20
                        }}>
                  {
                    showPassword == true ? (
                      <Image 
                      style={{ alignSelf:'center',  width: 25,
                      top:0,
                      height: 25
                      }} 
                      source={require('../../resources/hide.png')}  />
                    ) : (
                      <Image 
                      style={{ alignSelf: 'center',  width: 25,
                      top:0,  
                      height: 25 }}
                      source={require('../../resources/view.png')}  />
                      )
                  }
            </TouchableOpacity>
            <Separator/>
          </View>

        <View style={{flex:0.5,justifyContent:'center', marginLeft:10,marginRight:10}}>
          <Button
            title="Continue"
            testID="continueButton"
            accessibilityLabel="continueButton"
            onPress={submit}
            filled
            style={{
              marginTop: 0,
              marginBottom: 0
            }}
          >
          </Button>
        </View>

        <View style={{flex:0.5,justifyContent:'flex-end'}}>
          <Footer/>
        </View>
      </View>
    </SafeAreaView>
    )
}

