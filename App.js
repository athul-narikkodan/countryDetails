import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CountriesListing from './screens/countriesListing';
import CountryDetails from './screens/CountryDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List Of Countries" component={CountriesListing} />
        <Stack.Screen name='Country Details' component={CountryDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
