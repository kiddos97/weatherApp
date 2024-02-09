import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WindSpeedScreen from "../screens/WindSpeedScreen"
import WeatherScreen from "../screens/WeatherScreen"
import React from 'react'
import RainVolumeScreen from '../screens/RainVolumeScreen';




const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={WeatherScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Wind" component={WindSpeedScreen} options={{headerShown:false,presentation:'modal'}} />
    <Stack.Screen name="Rain" component={RainVolumeScreen} options={{headerShown:false,presentation:'modal'}} />
  </Stack.Navigator>
  )
}

export default AuthNavigator
