import React from 'react'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import color from '../config/color'

import WeatherCard from './Card/WeatherCard'

const Weather = [

    {
        id:1,
        Day: "Monday",
        weather: "Sunny",
        HiTemp: 75,
        lowTemp: 60
},
{
    id:2,
    Day: "Tuesday",
    weather: "Sunny",
    HiTemp: 75,
    lowTemp: 60
},
{
    id:3,
    Day: "Wednesday",
    weather: "Sunny",
    HiTemp: 75,
    lowTemp: 60
},
{
    id:4,
    Day: "Thursday",
    weather: "Sunny",
    HiTemp: 75,
    lowTemp: 60
},
{
    id:5,
    Day: "Friday",
    weather: "Sunny",
    HiTemp: 75,
    lowTemp: 60
},
]

const ForecastList = () => {

    //const [weather, setWeather] = useState([])
  return (
    <View style={styles.screen}>
         <Text style={styles.forecastHeading}> 5 - Day Forecast</Text>
        <FlatList
        data={Weather}
        keyExtractor={Weather =>  Weather.id}
        renderItem={({ item }) => (
            <WeatherCard
            Day={item.Day}
             weather ={ item.weather}
              HiTemp={item.HiTemp} 
              lowTemp ={ item.lowTemp}
              width={170}
            />
        )}
        horizontal
        />
    </View>
  )
}
const styles = StyleSheet.create({
    screen:{
        padding: 10,
        paddingTop:40,
        
    },
    forecastHeading:{
        textAlign:'center',
        color:color.white,
        fontSize:20,
        marginVertical:20,
        fontWeight:'bold'
      }

})
export default ForecastList