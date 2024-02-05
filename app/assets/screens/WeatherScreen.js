import React from 'react'

import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar, ImageBackground, ScrollView } from 'react-native'
import SearchCity from '../../../components/SearchCity'
import DisplayCity from '../../../components/DisplayCity'
import ForecastList from '../../../components/ForecastList'
import color from '../../../config/color'
import WeatherDescription from '../../../components/WeatherDescription'

const WeatherScreen = () => {
  return (


    <ImageBackground
        style={styles.screen}
        source={require('../../assets/background.jpg')}
        blurRadius={10}
        >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.searchContainer}>
                <SearchCity/>
                </View>
                    <DisplayCity/>
                    <View>
                        <ForecastList/>
                        </View>
                            <View style={styles.container}><WeatherDescription/></View>
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
    }
    
})

export default WeatherScreen
