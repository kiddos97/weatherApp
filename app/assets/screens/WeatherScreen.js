import React from 'react'

import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar, ImageBackground } from 'react-native'
import SearchCity from '../../../components/SearchCity'
import DisplayCity from '../../../components/DisplayCity'

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
    }
})

export default WeatherScreen
