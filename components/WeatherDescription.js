import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../config/color';


const decimalToDMS = (decimal) => {
    const degrees = Math.floor(decimal);// Round to 2 decimal places


    return `${degrees}° `;
  };
const WeatherDescription = ({ onPress, weatherData}) => {
  return (
        <View style={styles.bigContainer}>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="temperature-low" size={15} color={color.white}/>
                <Text style = {styles.headingText}>Feels Like</Text>
            </View>
            <Text style={styles.degreeText}>{weatherData.current?.feelslike_f}</Text>
            <Text style={styles.Text}>{weatherData.current?.condition?.text}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="water" size={15} color={color.white}/>
                <Text style = {styles.headingText}>Precipitation</Text>
            </View>
            <Text style={styles.degreeText}>{decimalToDMS(weatherData.current?.condition.precip_mm)}</Text>
            <Text style={styles.Text}>{weatherData.current?.condition?.text}</Text>
        </View>
        </TouchableOpacity>
        </View>

  )
}

const styles = StyleSheet.create({
    bigContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    container:{

        borderColor:color.white,
        borderWidth:2,
        padding:15,
        borderRadius:35,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width:170,
        marginRight:10,
        shadowOpacity: 1,
        shadowRadius: 2.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},

    },
    headingText:{
        fontSize:15,
        paddingBottom:20,
        color:color.white,
        fontWeight:'bold',
        textTransform:'uppercase',
        marginRight:-10
    },
    degreeText:{
        fontSize:35,
        color:color.white,
        marginVertical:20,
    },
    iconContainer:{
        flexDirection:'row',
        paddingRight:10,
        justifyContent:'space-evenly'
    },
    Text:{
        color:color.white,
        fontSize:15,
        fontWeight:'bold'
    }
})

export default WeatherDescription
