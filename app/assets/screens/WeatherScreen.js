import React from 'react'

import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar, ImageBackground } from 'react-native'

const WeatherScreen = () => {
  return (

     
           <ImageBackground style={styles.screen} source={require('../../assets/background.jpg')}>
           </ImageBackground>
     
 
  )
}



const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1
    },
})

export default WeatherScreen
