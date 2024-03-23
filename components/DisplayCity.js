import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native'
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
                <Text style={styles.degrees}>{decimalToDMS(weatherData.current?.temp_f)}</Text>
                <View style={styles.iconContainer}>
                    <Image
                    source = {{uri:'https:'+weatherData.current?.condition?.icon}}
                    />
                </View>
                <Text style={styles.weatherText}>
                    {weatherData.current?.condition?.text}
                </Text>
                <View style={styles.tempContainer}>
                    <Text style={styles.tempText}>{'Wind: '+ weatherData.current?.wind_mph+'mph'}</Text>
                    <Text style={styles.tempText}>{'Wind Direction: '+ weatherData.current?.wind_dir}</Text>
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
