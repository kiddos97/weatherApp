import { SafeAreaView, Text, View } from "react-native";
import WeatherScreen from "./app/assets/screens/WeatherScreen";
import SearchCity from "./components/SearchCity";
import DisplayCity from "./components/DisplayCity";
import WeatherCard from "./components/Card/WeatherCard";
import WindDescription from "./components/WindDescription";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WindSpeedScreen from "./app/assets/screens/WindSpeedScreen";
import AuthNavigator from "./app/assets/Navigation/AuthNavigator";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   <AuthNavigator/>
    </NavigationContainer>
  );
}

