import React from 'react'
import { ImageBackground, SafeAreaView, Text, View,StyleSheet,Platform, StatusBar} from 'react-native'

const WindSpeedScreen = () => {
  return (
    <ImageBackground
    style={styles.screen}
    source={require('../../assets/background.jpg')}
    blurRadius={10}
    ></ImageBackground>
  )
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1
    },
})

export default WindSpeedScreen
