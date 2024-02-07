import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import color from '../../config/color';
const WeatherCard = ({Day, weather, HiTemp, lowTemp, width}) => {
  return (
  
 
        <View style={[styles.cardContainer,{width}]}>
            <Text style={styles.headingText}>{Day}</Text>
            <View style={styles.iconContainer}>
                <Ionicons name="sunny" size={30} color="orange"/>
            </View>
            <Text style={styles.weatherText}>{weather}</Text>
            <View style={styles.tempContainer}>
                <Text style={styles.text}>{'HI: '+ HiTemp}</Text>
                <Text style={styles.text}>{'Low: '+ lowTemp}</Text>
            </View>
        </View>
 
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        borderRadius:35,
        borderColor:color.white,
        borderWidth:2,
        padding:20,
        backgroundColor:'rgba(0,0,0,0.5)',
        marginRight:10,
    },
    headingText:{
        textAlign:'center',
        marginVertical:10,
        fontWeight:'bold',
        color: color.white,
        fontSize:15
    },
    iconContainer:{
        alignItems:'center'
    },
    weatherText:{
        textAlign:'center',
        marginVertical:10,
        fontWeight:'bold',
        color:color.white,
        fontSize:15
    },
    tempContainer:{
      
       flexDirection:'column',
       justifyContent:'space-evenly',
       marginVertical:20
    },
    text:{
        color:color.white,
        fontWeight:'bold',
        textAlign:'center',
    }

})
export default WeatherCard
