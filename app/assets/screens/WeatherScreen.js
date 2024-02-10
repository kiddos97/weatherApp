import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar, ImageBackground, ScrollView } from 'react-native'
import SearchCity from '../../../components/SearchCity'
import DisplayCity from '../../../components/DisplayCity'
import ForecastList from '../../../components/ForecastList'
import color from '../../../config/color'
import WeatherDescription from '../../../components/WeatherDescription'
import WindDescription from '../../../components/WindDescription'
import VisiblityHumidity from '../../../components/VisiblityHumidity'
import * as Location from 'expo-location'
import axios from "axios";





const WeatherScreen = ({ navigation }) => {
    const [searchCity, setSearchCity] = useState('')
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [searchOption, setSearchOption] = useState('city');

    useEffect(() => {
        if(searchCity){
            fetchWeatherData()
        }
    },[])

    useEffect(() => {
        getLocation();
    },[])
    const getLocation = async() => {
        try{
            const { granted} = await Location.requestForegroundPermissionsAsync()
            if(!granted) return 

            const { coords:{latitude, longitude} } = await Location.getLastKnownPositionAsync()
            setLatitude(latitude)
            setLongitude(longitude)
            setLocation({latitude,longitude})
        }catch(error){
            console.error(error)
        }

        }
       


    const fetchWeatherData = async () => {
        try{
        const apiKey="cb24cf6a11f7bc95590f71abac2b11c2";
        const latitude = location.latitude
        const longitude =  location.longitude
        const baseURL = ``
        if(searchOption === "city"){
            baseURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}`
        }else{
            baseURL =  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        }
        const res = await axios.get(baseURL)
        setWeatherData(res.data)
     } catch(error){
        console.error('Err: ', error)
        }
}
    const handleCity = async () => {
        try {
            if (searchOption === "city" && searchCity.trim() !== '') {
                fetchWeatherData();
            }else if(searchOption === "coordinates" && latitude.trim() !== '' && longitude.trim() !== ''){
                fetchWeatherData()
            }
        } catch (error) {
            console.error("Err: ", error.code);
        }
    };

  return (


    <ImageBackground
        style={styles.screen}
        source={require('../../assets/background.jpg')}
        blurRadius={10}
        >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.searchContainer}>
                <SearchCity 
                handleCity={handleCity}
                setSearchCity={setSearchCity}
                setSearchOption={setSearchOption}
                latitude={latitude}
                longitude={longitude}
                searchOption={searchOption}
                searchCity={searchCity}/>
                </View>
                    <DisplayCity weatherData={weatherData}/>
                    <View>
                        <ForecastList/>
                        </View>
                            <View style={styles.container}>
                                <WeatherDescription onPress={() => navigation.navigate('Rain')}/>
                                </View>
                                <View style={styles.windContainer}>
                                    <WindDescription onPress={() => navigation.navigate("Wind")}/>
                                    </View>
                                    <View style={styles.container}>
                                <VisiblityHumidity/>
                                </View>
                </ScrollView>
               </ImageBackground>
             
     
 
  )
}



const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1
    },
    searchContainer:{
        padding:40
    },
    container:{
        padding:20
    },
    windContainer:{
        padding:20
    }
    
})

export default WeatherScreen
