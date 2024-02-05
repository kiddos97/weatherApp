import React from 'react'

import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar, ImageBackground, ScrollView } from 'react-native'
import SearchCity from '../../../components/SearchCity'
import DisplayCity from '../../../components/DisplayCity'
import ForecastList from '../../../components/ForecastList'
import color from '../../../config/color'

const WeatherScreen = () => {
  return (


    <ImageBackground
        style={styles.screen}
        source={require('../../assets/background.jpg')}
        blurRadius={10}
        >
            <View style={styles.searchContainer}>
                <SearchCity/>
                </View>
               
                    <DisplayCity/>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.ForecastContainer}>
                        <Text style={styles.forecastHeading}> 5 - Day Forecast</Text>
                        <ForecastList/>
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
    ForecastContainer:{
        paddingHorizontal:20
    },
    scrollContainer: {
        flexGrow: 1,
      },
      forecastHeading:{
        textAlign:'center',
        color:color.white,
        fontSize:20,
        marginVertical:20,
        fontWeight:'bold'
      }
})

export default WeatherScreen
