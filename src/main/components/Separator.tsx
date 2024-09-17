import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../modules/constants";

export default () => <View style={separatorStyle.separator} />;

const separatorStyle = StyleSheet.create({
    separator: {
      backgroundColor:COLORS.black,
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
      shadowColor: '#000',
      elevation: 8,  
      zIndex:999,
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 2 },
    }
  })