import { View,Text, FlatList,StyleSheet,Image,TouchableOpacity, Pressable } from "react-native"
import { useEffect,useState } from "react";

import axios from 'axios';

const CountriesListing=({navigation})=>{
const [countryLists,setCountryList]=useState('')
    useEffect (()=>{
        countryData()
      },[])

const countryData=()=>{
    axios.get('https://restcountries.com/v2/all')
    .then(function (response) {
        setCountryList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}
const displayCountryList=({item})=>{
    const pressHandler=()=>{
        navigation.navigate('Country Details',{data:item})
        {console.log('jjjj');}
    }
    return(
        <View style={styles.listMainContainer} >
      <TouchableOpacity 
            onPress={pressHandler}>
            <View style={{alignItems:'center' }}>
                <Image  style={{ width: '280%', height: 100 }}   source={{ uri: item.flags.png }}/>
                <Text>{item.name}</Text>
                <Text>Dial Code : {item.numericCode}</Text>
            </View>
        </TouchableOpacity>
      </View>
      
        
    )
}
    return(
        <View style={styles.mainContainer}>
       
           <FlatList
            data={countryLists}
            renderItem={(item)=>displayCountryList(item)}
            keyExtractor={(item)=>item.name}
            itemContainerStyle={{ width: '48%' }}
            contentContainerStyle={{ width: '100%' }}
                      />
        </View>
    )
}
export default CountriesListing
const styles=StyleSheet.create({
    mainContainer:{
       flex:1,
       flexDirection:"row",
       marginTop:20,
       padding:20, 
       justifyContent:'space-between',
       overflow:'hidden'
    },
    listMainContainer:{
        width:'auto',
        padding:10,
        margin:20,
        backgroundColor:'#e8b3be',
        alignItems:'center',
        borderRadius:8,
        overflow:'hidden',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    TextStyle:{
        fontSize:18,
        fontWeight:'300',
        textAlign:'center',
        margin:20
    },
    imageStyle:{
        height:150,
        width:'100%'
    }

})