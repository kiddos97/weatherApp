import React from 'react'
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'

const Screen = () => {
  return (
    <SafeAreaView style={styles.screen}>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1
    },
})
export default Screen
