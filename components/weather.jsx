
import {  StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import { useEffect, useState } from 'react';

const WeatherApp=({name})=> {
 const [weatherData,setweather]= useState('')
 
useEffect (()=>{
  weather()
})
  const weather=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4909b43ee661a8b4574521340ac2c093`)
    .then(function (response) {
     setweather(response.data.main)
     })
     .catch(function (error) {
       console.log(error);
     });
  }
  
  return (
    <View style={styles.container}>
  <Text style={styles.heading}>Weather</Text>
 { weatherData.feels_like && <View style={styles.temperature}>
  <Text>Feels Like : </Text>
  <Text style={styles.currentTemp}>{weatherData.feels_like}</Text>
  </View>}
  { weatherData.humidity && <View style={styles.temperature}>
  <Text>Humidity:</Text>
  <Text style={styles.currentTemp}>{weatherData.humidity}</Text>
  </View>}
     </View>
  );
}
export default WeatherApp

const styles = StyleSheet.create({
  
  heading:{
  fontWeight:'400',
  fontSize:20,
 margin:20
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle:'italic',
    width:'100%',
    borderRadius:8,
  },
  temperature:{
    margin:10,
    width:'80%',
     height:30
  },
});
