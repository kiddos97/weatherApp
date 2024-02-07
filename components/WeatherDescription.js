import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../config/color';

const WeatherDescription = () => {
  return (
    <View style={styles.bigContainer}>
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <FontAwesome5 name="temperature-low" size={15} color={color.white}/>
            <Text style = {styles.headingText}>Feels Like</Text>
        </View>
        <Text style={styles.degreeText}>60</Text>
        <Text style={styles.Text}>Wind makes it feel colder</Text>
    </View>
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Ionicons name="water" size={15} color={color.white}/>
            <Text style = {styles.headingText}>Precipitation</Text>
        </View>
        <Text style={styles.degreeText}>60</Text>
        <Text style={styles.Text}>Light Rain expected in a few hours</Text>
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
        marginRight:10

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
