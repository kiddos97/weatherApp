import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import color from '../config/color'
import Ionicons from 'react-native-vector-icons/Ionicons';
const DisplayCity = () => {
  return (
  <SafeAreaView>
    <View style={styles.container}>
        <Text style={styles.cityText}>
                Austin, Texas
        </Text>
        <Text style={styles.degrees}>60</Text>
        <View style={styles.iconContainer}>
            <Ionicons name="sunny" size={50} color="orange"/>
        </View>
        <Text style={styles.weatherText}>
            Sunny
        </Text>
        <View style={styles.tempContainer}>
            <Text style={styles.tempText}>HI: 75</Text>
            <Text style={styles.tempText}>Low: 60</Text>
        </View>
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
        color:color.white,
        fontWeight:'bold'
    },
    tempContainer:{
        flexDirection:'row',
       justifyContent:'space-evenly'
    },
    tempText:{
        color:color.white,
        textAlign:'center',
        marginVertical:10,
        fontSize: 15,
        fontWeight:'bold'

    },  
     iconContainer:{
        alignItems:'center',
        marginVertical:10
    },
})
export default DisplayCity
