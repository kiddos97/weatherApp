import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import color from '../config/color'

const DisplayCity = () => {
  return (
  <SafeAreaView>
    <View style={styles.container}>
        <Text style={styles.cityText}>
                Austin, Texas
        </Text>
        <Text style={styles.degrees}>60</Text>
        <Text style={styles.weatherText}>
            Sunny
        </Text>
    </View>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        padding: 10,
        marginVertical:10,
        paddingTop:30
    },
    cityText:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:color.white
    },
    degrees:{
        fontSize:30,
        textAlign:'center',
        marginVertical:20,
        color:color.white
    },
    weatherText:{
        fontSize:15,
        textAlign:'center',
        color:color.white
    }
})
export default DisplayCity
