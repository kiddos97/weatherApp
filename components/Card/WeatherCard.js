import React from 'react'
import { SafeAreaView, View, Text, StyleSheet,Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import color from '../../config/color';

const decimalToDMS = (decimal) => {
    const degrees = Math.floor(decimal);// Round to 2 decimal places


    return `${degrees}° `;
  };
const WeatherCard = ({Day, weather, HiTemp, lowTemp, width,iconURL}) => {
  return (
  
 
        <View style={[styles.cardContainer,{width}]}>
            <Text style={styles.headingText}>{Day}</Text>
            <View style={styles.iconContainer}>
                <Image source={{uri:iconURL}} style={{ width: 50, height: 50 }}/>
            </View>
            <Text style={styles.weatherText}>{weather}</Text>
            <View style={styles.tempContainer}>
                <Text style={styles.text}>{'HI: '+ decimalToDMS(HiTemp)}</Text>
                <Text style={styles.text}>{'Low: '+ decimalToDMS(lowTemp)}</Text>
            </View>
        </View>
 
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        borderRadius:50,
        borderColor:color.white,
        borderWidth:2,
        padding:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        marginRight:15,
      
      
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
