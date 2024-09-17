import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, Image,Platform,StyleSheet, Text, TouchableNativeFeedback, TouchableNativeFeedbackBase, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { ItemProps } from "../modules/types";
import Footer from "./Footer"; 
import { COLORS } from "../modules/constants";
import Separator from "./Separator";
import { useNavigation } from '@react-navigation/native';


const Item = Platform.OS === 'ios'? 
({title, image, id}: ItemProps) => {
  const navigation = useNavigation<any>();
  
  return(<View style={styles.container}>
    
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemDetails', {
        id:id,
        title:title,
        image:image
      })}
    >
    <View style={styles.productCard}>
      <Text testID="itemName" accessibilityLabel="itemName" style={styles.productName}>{title}</Text>
      <Image testID="itemImage" accessibilityLabel="itemImage" style={styles.productImage} source={image}/>
    </View>
    </TouchableOpacity>
  </View>
)}:
({title, image, id}: ItemProps) => {
  const navigation = useNavigation<any>();
  
  return(<View style={styles.container}>
    
    <TouchableNativeFeedback
      onPress={() => navigation.navigate('ItemDetails', {
        id:id,
        title:title,
        image:image
      })}
    >
    <View style={styles.productCard}>
      <Text testID="itemName" accessibilityLabel="itemName" style={styles.productName}>{title}</Text>
      <Image testID="itemImage" accessibilityLabel="itemImage" style={styles.productImage} source={image}/>
    </View>
    </TouchableNativeFeedback>
  </View>
)}
 
export default function HomeComponent({navigation}:any): React.JSX.Element {
    return(
        <SafeAreaView style={styles.container}>
        <Text testID="title" accessibilityLabel="title" style={styles.title}>
          Inventory
        </Text>
        <Separator/>  
        <FlatList
          testID="itemsList"
          accessibilityLabel="itemsList"
          data={DATA}
          renderItem={({item}) => <Item title={item.title} image={item.image} id={item.id}/>}
          keyExtractor={item => item.id}
        />
        
        <View style={{justifyContent:'flex-end',bottom: 0,
        alignItems: 'center'}}>
          <Footer/>
        </View>
      </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop:40,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 8,  
    zIndex:999,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 30,
    marginBottom: 20,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 40,
    fontWeight: 'normal',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.primary,
    letterSpacing: 4
  }
})

//Static data as example.
//In a real app these will be loaded from server.
const DATA = [
    {
      id: '1',
      title: 'Abstract Sco\'',
      image:require('../../resources/images/inventory/1.png')
    },
    {
      id: '2',
      title: 'Stormy Lake',
      image:require('../../resources/images/inventory/2.png')
    },
    {
      id: '3',
      title: 'Calm Lake',
      image:require('../../resources/images/inventory/3.png')
    },
    {
      id: '4',
      title: 'Snowy Dessert',
      image:require('../../resources/images/inventory/4.png')
    },
    {
      id: '5',
      title: 'Spring Time',
      image:require('../../resources/images/inventory/5.png')
    },
    {
      id: '6',
      title: 'Daybreak',
      image:require('../../resources/images/inventory/6.png')
    },
    {
      id: '7',
      title: 'Nocturne',
      image:require('../../resources/images/inventory/7.png')
    },
    {
      id: '8',
      title: 'Antartida',
      image:require('../../resources/images/inventory/8.png')
    }
]

