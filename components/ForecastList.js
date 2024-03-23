import React from 'react'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import color from '../config/color'

import WeatherCard from './Card/WeatherCard'


const ForecastList = ({ forecastData }) => {

  


  return (
    <View style={styles.screen}>
         <Text style={styles.forecastHeading}> Daily Forecast</Text>
         <FlatList
        data={forecastData.forecast.forecastday}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => {
          let date = new Date(item.date);
          let options = { weekday: 'long' };
          let dayname = date.toLocaleDateString('en-US', options);
          dayname = dayname.split(',')[0];

    return (
      <WeatherCard
        Day={dayname}
        weather={item.day?.condition?.text}
        HiTemp={item.day?.maxtemp_f}
        lowTemp={item.day?.mintemp_f}
        iconURL={item.day?.condition?.icon}
        width={140}
      />
    );
  }}
  horizontal
/>

    </View>
  )
}
const styles = StyleSheet.create({
    screen:{
        paddingTop:40,
        padding:5,
        shadowOpacity: 1,
        shadowRadius: 2.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},
        
    },
    forecastHeading:{
        textAlign:'center',
        color:color.white,
        fontSize:20,
        marginVertical:20,
        fontWeight:'bold'
      },
   

})
export default ForecastList
