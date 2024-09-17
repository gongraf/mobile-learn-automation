import React, { useCallback, useState } from "react"
import { Alert } from "react-native"
import { Image, ImageBackground, Keyboard, TextInput, TouchableHighlight, TouchableOpacity } from "react-native"
import { SafeAreaView, Text, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import DatePicker from 'react-native-date-picker'
import { COLORS } from "../modules/constants"
import { IUser } from "../modules/types"
import Button from "./Button"
import Footer from "./Footer"
import Separator from "./Separator"


export default function PersonalInfoComponent({ route, navigation }:any) : React.JSX.Element{

    const  newUser  = route.params.newUser
    
    const [finalUser,setUser]  = useState<IUser>() 
    const [address,setAddress] = useState("")
    const [city,setCity]       = useState("")
    const [zip,setZip]         = useState("")
    const [date, setDate]      = useState(new Date())
    const [open,setOpen]       = useState(false)
    const [firstPress,setFirstPress] = useState(true)
    const [checkboxState,setCheckboxState] = useState(false)

    
    const submit = useCallback(async ()=> {
         
      if(!checkboxState) {
          Alert.alert("Please agree to terms and conditions.")
          return;
      }
      
      if(!address||!city||!zip||!date) {
        Alert.alert("Please complete all fields.")
        return;
      }

  
      //TODO: validate fields length and format
      setUser({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        id: await createUser(newUser),
        address: address+" "+city+" "+zip,
        dob: date
      })

      navigation.navigate("NewUserCreated",{
        finalUser
      })

    },[address,city,zip,date,checkboxState])

    return (
      <SafeAreaView style={{backgroundColor:COLORS.background,flex:1}}>
        <View style={{flex:1}}>
        
          <View style={{flex:0.7,justifyContent:'center',margin:20}}>
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
              accessibilityLabel="addressInput"
              testID="addressInput"
              placeholder="Address"
              autoCapitalize='words' 
              value={address}
              maxLength={40}
              onChangeText={setAddress}
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
            accessibilityLabel="cityInput"
            testID="cityInput"
            placeholder="City"
            autoCapitalize='words'
            value={city}
            maxLength={40}
            onChangeText={setCity}
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
            accessibilityLabel="zipInput"
            testID="zipInput"
            placeholder="ZIP"
            autoCapitalize='characters'
            keyboardType='numbers-and-punctuation'
            value={zip}
            maxLength={12}
            onChangeText={setZip}
            textAlign='left'>
          </TextInput>
          <Separator/>
        </View>
        
        <View style={{flex:0.3,marginLeft:20,marginRight:20,justifyContent:'space-evenly'}}>
          <TouchableOpacity
            testID="openDatePicker"
            accessibilityLabel="openDatePicker"
            onPress={()=>{
              setFirstPress(false)
              setOpen(true)
              Keyboard.dismiss()
            }}
          >
        
            <Text style={{color:"black", fontSize:18}}>
              {firstPress==true?"Birth Date":
              (date.getUTCMonth()+1)+"/"+date.getUTCDate()+"/"+date.getFullYear()}
            </Text> 
          </TouchableOpacity>
          <DatePicker
              testID="datePicker"
              accessibilityLabel="datePicker"
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
          />
          <Separator/>
        </View>

        <View style={{flex:0.5,justifyContent:'center', marginLeft:10,marginRight:10}}>
          <Button
            testID="signupButton"
            accessibilityLabel="signupButton"
            title="Signup!"
            onPress={submit}
            filled
            style={{
              marginTop: 0,
              marginBottom: 0
            }}
          >
          </Button>
          <BouncyCheckbox
            testID="termConditions"
            accessibilityLabel="termConditions"
            iconStyle={{   }}
            style={{ margin: 10 }}
            isChecked={checkboxState}
            fillColor={COLORS.primary}
            text="Agree to terms and conditions."
            onPress={() => setCheckboxState(!checkboxState)}
          />
        </View>
      
        <View style={{flex:0.5,justifyContent:'flex-end'}}>
          <Footer/>
        </View>
      </View>
    </SafeAreaView>
    )
}


async function createUser(user:IUser):Promise<string> {
  //post user to service and get id in response
  return "abc123"
}