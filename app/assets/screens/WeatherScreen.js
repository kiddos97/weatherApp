import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Platform, StatusBar, ImageBackground, ScrollView } from 'react-native'
import SearchCity from '../../../components/SearchCity'
import DisplayCity from '../../../components/DisplayCity'
import ForecastList from '../../../components/ForecastList'

import WeatherDescription from '../../../components/WeatherDescription'
import WindDescription from '../../../components/WindDescription'
import VisiblityHumidity from '../../../components/VisiblityHumidity'
import * as Location from 'expo-location'
import axios from "axios";



const WeatherScreen = ({ navigation }) => {
    const [searchCity, setSearchCity] = useState('')
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [location, setLocation] = useState();

    //const apiKey="ZZ5VUaL8uGJKKQsyObdhdBVDGRQhcyDV";
    const apiKey = 'b780a5daf51149f793b22603242503'
    //const DEFAULT_LOCATION = { latitude: 37.7749, longitude: -122.4194 }; // Default location (San Francisco)
    

    useEffect(() => {
        getLocation();
    },[])

    useEffect(() => {
       if(location){
        fetchWeatherData()
       }
            
        
    },[location])

    useEffect(() => {
        if(searchCity.trim() !== ''){
            fetchCityData();
        }
        
    },[])

    useEffect(() => {
        if(searchCity.trim() !== ''){
            fetchDailyForecast();
        }
        
    },[])


    const getLocation = async() => {
        try{
            const { granted} = await Location.requestForegroundPermissionsAsync()
            if(!granted) return 

            const { coords:{latitude, longitude} } = await Location.getLastKnownPositionAsync()
            setLocation({latitude,longitude})
        }catch(error){
            console.error(error)
        }
        } 
    const fetchWeatherData = async () => {
        try{
        let latitude = location.latitude
        let longitude =  location.longitude
        const baseURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
        const res = await axios.get(baseURL)
        console.log(res.data)
        setWeatherData(res.data)
     } catch(error){
        console.error('Err: ', error)
        }
}


    const fetchCityData = async () => {
        try{
       
            const baseCityUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchCity}`
            const res = await axios.get(baseCityUrl)
            console.log(res.data)
            setWeatherData(res.data)
        }catch(error){
            console.log('Err: ' + error)
        }
    }

    const fetchDailyForecast = async () => {
        try{
            const baseDailyUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchCity}&days=3`
            const res = await axios.get(baseDailyUrl)
            console.log('Daily: ' + res.data)
            setForecastData(res.data)
        }catch(error){
            console.error('Err: ', error)
        }
    }
    const handleCity = async () => {
        try {
            if(searchCity.trim() !== ''){
                fetchCityData()
                fetchDailyForecast();
            }
        } catch (error) {
            console.error("Err: ", error);
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
                searchCity={searchCity}/>
                </View>
                    <DisplayCity weatherData={weatherData}/>
                    <View>
                        {forecastData && <ForecastList forecastData={forecastData}/>}
                        </View>
                            <View style={styles.container}>
                                {weatherData && <WeatherDescription weatherData={weatherData} onPress={() => navigation.navigate('Rain')}/>}
                                </View>
                                <View style={styles.windContainer}>
                                    {weatherData && <WindDescription weatherData={weatherData} onPress={() => navigation.navigate("Wind",{searchCity})}/>}
                                    </View>
                                    <View style={styles.container}>
                                {weatherData && <VisiblityHumidity weatherData={weatherData}/>}
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
