import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

const WeatherCard = () => {
  return (
  
    <SafeAreaView>
        <View style={styles.cardContainer}>
            <Text  style={styles.headingText}>Monday</Text>
            <Text>Sunny</Text>
            <Text>HI: 75</Text>
            <Text>Low: 60</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        borderRadius:15,
        borderColor:'black',
        borderWidth:1
    },
    headingText:{
        textAlign:'center'
    }
})
export default WeatherCard
