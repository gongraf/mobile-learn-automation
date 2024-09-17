import React, { useCallback, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Alert, Keyboard, StyleSheet, Text, TextInput, View } from "react-native"
import Footer from "./Footer"
import Separator from "./Separator"

import Button from "./Button"
import { COLORS } from "../modules/constants"

export default function ResertPasswordComponent({navigation}:any): React.JSX.Element {

    const [email,setEmail] = useState("")

    const submit = useCallback(async ()=> {

      try {
        Keyboard.dismiss()
  
        if(!email){
          Alert.alert("Please complete your email.")
          return;
        }
        
        navigation.navigate("Login")
      }
      catch(error){
        console.log(error)
        Alert.alert("Email incorrect!")
      }
      finally{
        setEmail("")
      }
    },[email])
  
  
    return(
        <SafeAreaView style={{flex:2, backgroundColor:COLORS.background}}>  
        <View style={styles.container}>
        
          <View style={{flex:0.3}}>
            <TextInput  placeholder="Please enter your email"
            testID="emailField"
            onChangeText={setEmail}
            accessibilityLabel="emailField"/>
            <Separator/>
            <Text style={styles.description}>
              A one time code will be sent.
            </Text>
          </View>

    
          <View style={{flex:0.3}}>
          <Button
              testID="sendCodeButton"
              accessibilityLabel="sendCodeButton"
              title="Send Code"
              onPress={submit}
              filled
              style={{marginTop:50}}
            ></Button>
          </View>

          <View style={{flex:0.4}}/>
        </View>

        <View style={{flex:0.1,justifyContent:'flex-end',marginTop:0,alignItems: 'center'}}>
          <Footer/>
        </View>
      </SafeAreaView>  
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEEEEE',
      padding:20,
      paddingTop: 50
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginTop: 22,
      color: '#5F6D7A',
    },
    description: {
      marginTop: 20,
      textAlign: 'center',
      color: '#A9A9A9',
      fontSize: 16,
      margin: 40,
    }
  })