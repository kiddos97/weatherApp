
import axios from "axios";
import React, { useState } from 'react';


const [data, setData] = useState([]);
const fetchWeatherData = async () => {


      
        try{
            const apiKey="cb24cf6a11f7bc95590f71abac2b11c2";
            const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
            const res = await axios.get(baseURL)
            setData(res.data)
        } catch(error){
            console.error('Err: ', error)
        }
    }
    



export default fetchWeatherData
