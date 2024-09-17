import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "./Button";
import Footer from "./Footer";
import { COLORS } from "../modules/constants";


export default function NewUserCreatedComponent({ navigation }:any) : React.JSX.Element{
    
    return(
      <SafeAreaView style={{backgroundColor:COLORS.background,flex:1}}>  
        <View style={styles.container}>
        
          <View style={{flex:0.3}}>
            <Text testID="title" accessibilityLabel="title" style={styles.title}>Your user has been created.</Text>
            <Text testID="instructions" style={styles.description}>
              Please check your email and confirm your information.
              After that please login.
            </Text>
          </View>

          <View style={{flex:0.3}}>
          <Button
              testID="goLoginButton"
              accessibilityLabel="goLoginButton"
              title="Go to Login"
              onPress={()=>navigation.navigate("Login")}
              filled
              style={{
                marginTop:50
              }}
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