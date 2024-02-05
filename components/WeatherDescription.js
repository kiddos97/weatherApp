import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../config/color';

const WeatherDescription = () => {
  return (
   <SafeAreaView style={styles.bigContainer}>
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <FontAwesome5 name="temperature-low" size={15}/>
            <Text style = {styles.headingText}>Feels Like</Text>
        </View>
        <Text style={styles.degreeText}>60</Text>
    </View>
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Ionicons name="water" size={15}/>
            <Text style = {styles.headingText}>Precipitation</Text>
        </View>
        <Text style={styles.degreeText}>60</Text>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    bigContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    container:{

        borderColor:"black",
        borderWidth:2,
        padding:10,
        borderRadius:20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width:170,

    },
    headingText:{
        fontSize:15,
        paddingBottom:20,
        color:color.white
    },
    degreeText:{
        fontSize:35,
        color:color.white,
        marginVertical:20
    },
    iconContainer:{
        flexDirection:'row',
        paddingRight:10
    }
})

export default WeatherDescription
