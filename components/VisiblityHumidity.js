import React from 'react'
import {  View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../config/color';

const VisiblityHumidity = () => {
    return (
        <View style={styles.bigContainer}>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialIcons name="visibility" size={15} color={color.white}/>
                <Text style = {styles.headingText}>Visibility</Text>
            </View>
            <Text style={styles.degreeText}>18 mi</Text>
            <Text style={styles.Text}>Perfectly clear view</Text>
        </View>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="weather-partly-rainy" size={15} color={color.white}/>
                <Text style = {styles.headingText}>Humidity</Text>
            </View>
            <Text style={styles.degreeText}>60%</Text>
            <Text style={styles.Text}>The dew point is 46 right now</Text>
        </View>
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
            textTransform:'uppercase'
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

export default VisiblityHumidity
