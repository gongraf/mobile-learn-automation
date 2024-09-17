import React from "react";
import { Image } from "react-native";


export default () => 
<Image 
    style={{ alignSelf: 'center', resizeMode: 'cover' }} 
    testID="logoImage"
    source={require('../../resources/logo.png')} 
/>