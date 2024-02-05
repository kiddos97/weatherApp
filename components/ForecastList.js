import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

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
        contentContainerStyle={styles.list}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    screen:{
        padding: 10,
        paddingTop:40,
        
    },
    list:{
        paddingHorizontal:20
    }
})
export default ForecastList
