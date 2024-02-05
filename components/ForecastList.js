import React from 'react'
import { FlatList, View } from 'react-native'



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
  return (
    <View>
        <FlatList/>
    </View>
  )
}

export default ForecastList
