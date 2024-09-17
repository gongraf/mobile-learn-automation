/* eslint-disable prettier/prettier */
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image, StyleSheet, Text, View } from "react-native"
import Footer from "./Footer"
import { COLORS } from "../modules/constants"

const DUMMY_TEXT = "Donec in placerat lorem. Donec maximus mi nec mauris malesuada condimentum. Aenean urna quam, hendrerit nec tincidunt eget, semper aliquet mauris. Integer ut dui lectus. Vivamus egestas facilisis nisl et viverra. Proin ut dui purus. Vestibulum augue nisi, pulvinar at rhoncus efficitur, aliquet ut neque. Aliquam volutpat semper tellus ut dignissim. Pellentesque vitae iaculis nisi. Vivamus quis finibus nisl. Donec sollicitudin diam eu enim tincidunt sollicitudin. Cras cursus viverra nisl, et scelerisque diam sagittis eget. Pellentesque sed vulputate felis, consequat posuere elit. Morbi a est eget dolor porta aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. "

export default function ItemDetailsComponent({navigation,route}:any): React.JSX.Element {

    const {id,title,image} = route.params

    return(
        <SafeAreaView style={{backgroundColor:COLORS.background,flex:1}}>
            <View style={styles.container}>
            <Text testID="title" accessibilityLabel="title" style={styles.title}>{title}</Text>
            <View style={styles.meta}>
                <Text testID="author" style={styles.author}>by "Wolfy"</Text>
                <Text testID="date" style={styles.date}>11/10/1992</Text>
            </View>
            <Image testID="image" source={image} style={styles.image} />
            <Text testID="textDescription" style={styles.content}>
            {DUMMY_TEXT}
            </Text>
            </View>
            <View style={{flex:0.3 ,justifyContent:'flex-end',marginTop:0,alignItems: 'center'}}>
                <Footer/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:8,
      padding: 20,
      backgroundColor: '#f7f7f7',
      paddingTop:40,
      top:-20
    },
    title: { 
      flex:0.5,  
      fontSize: 24,
      fontWeight: 'bold',
      top:-20
    },
    meta: {
      flex: 0.5,  
      flexDirection: 'row',
      marginTop: 0,
    },
    author: {
      fontSize: 14,
      color: '#999',
      marginRight: 10,
      top:-20
    },
    date: {
      fontSize: 14,
      color: '#999',
      top:-20
    },
    image: {
      flex: 4,  
      width: '100%',
      height: 200,
      marginBottom: 20,
    },
    content: {
      flex:4,  
      fontSize: 16,
      marginTop: 20,
    },
  });

