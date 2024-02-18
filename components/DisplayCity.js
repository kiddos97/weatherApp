import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import color from '../config/color'
import Ionicons from 'react-native-vector-icons/Ionicons';
const DisplayCity = ({ weatherData}) => {

    const decimalToDMS = (decimal) => {
        const degrees = Math.floor(decimal);// Round to 2 decimal places

    
        return `${degrees}° `;
      };
  
  return (

            <View style={styles.container}>
            {weatherData ? (
            <View>
                <Text style={styles.cityText}>
                        {weatherData.location.name}
                </Text>
                <Text style={styles.degrees}>{decimalToDMS(weatherData.data.values.temperature)}</Text>
                <View style={styles.iconContainer}>
                    <Text><Ionicons name="sunny" size={50} color="orange"/></Text>
                </View>
                <Text style={styles.weatherText}>
                    {weatherData.type}
                </Text>
                <View style={styles.tempContainer}>
                    <Text style={styles.tempText}>{'HI: '+ decimalToDMS(weatherData.data.values.windGust)}</Text>
                    <Text style={styles.tempText}>{'Low: '+ decimalToDMS(weatherData.data.values.windSpeed)}</Text>
                </View>
            </View>
            ): (<Text style={styles.errorText}><Ionicons name="sunny" size={50} color="orange"/></Text>
            )}
        </View>



  )
}
const styles = StyleSheet.create({
    container:{
        padding: 10,
        paddingTop:20
    },
    cityText:{
        fontSize:20,
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
    },
    errorText:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:color.white
    }
})
export default DisplayCity
