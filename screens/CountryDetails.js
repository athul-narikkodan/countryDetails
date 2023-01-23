import { View,Text,StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import WeatherApp from "../components/weather"

const CountryDetails=({route})=>{
    const {data}=route.params
    {console.log("data",data)}
    return(
        <View style={styles.detailsContainer} >
        <ScrollView style={{margin:10}}>
        <WeatherApp name={data.name}/>
        <Text style={styles.mainHeader}> Hello,                                                           
        details about  {data.name} are mentioned below </Text>
        <Text style={styles.textStyle}>Region : {data.region}</Text>
            <Text style={styles.textStyle} > Capital : {data.capital}</Text>
            <Text style={styles.textStyle} >Native : {data.nativeName}</Text>
            <Text style={styles.textStyle}>
              Population : {data.population}
            </Text>
            </ScrollView>
        </View>
    )
}
export default CountryDetails
const styles=StyleSheet.create({
    detailsContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        backgroundColor:'#6177cf',
    },
mainHeader:{
    fontSize:30,
    alignItems:'center',
    padding:18,
    color:'#89cf61'
},
 textStyle:{
   color:'white',
   fontStyle:'italic',
   fontWeight:'500',
   fontSize:20,
   margin:20,
   padding:10
 }

})