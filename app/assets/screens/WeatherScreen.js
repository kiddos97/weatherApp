import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar, ImageBackground, ScrollView } from 'react-native'
import SearchCity from '../../../components/SearchCity'
import DisplayCity from '../../../components/DisplayCity'
import ForecastList from '../../../components/ForecastList'
import color from '../../../config/color'
import WeatherDescription from '../../../components/WeatherDescription'
import WindDescription from '../../../components/WindDescription'
import VisiblityHumidity from '../../../components/VisiblityHumidity'
import axios from "axios";





const WeatherScreen = ({ navigation }) => {
    const [searchCity, setSearchCity] = useState('')
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if(searchCity.trim() !== ''){
            fetchWeatherData()
        }
    },[searchCity])


const fetchWeatherData = async () => {

    try{
        const apiKey="cb24cf6a11f7bc95590f71abac2b11c2";
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`;
        const res = await axios.get(baseURL)
        setWeatherData(res.data)
    } catch(error){
        console.error('Err: ', error)
    }
}

    const handleCity = async () => {
        try {
            if (searchCity.trim() !== '') {
                fetchWeatherData();
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
                <SearchCity handleCity={handleCity} setSearchCity={setSearchCity}/>
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
