import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

const WindDescription = () => {
  return (
   <SafeAreaView>
    <View style={styles.container}>
    <Text style = {styles.headingText}>
        Wind
    </Text>
    <View style ={ styles.windspeed}>
        <View style ={styles.containerSpeed}>
            <Text style={styles.speed}>
                13
            </Text>
            </View>
        <View>
            <Text style={styles.text}>MPH</Text>
            <Text style={styles.text}>Wind</Text>
        </View>
    </View>
    <View style={styles.space}/>
    <View style ={ styles.windspeed}>
        <View style ={styles.containerSpeed}>
            <Text style={styles.speed}>
                27
            </Text>
            </View>
        <View>
            <Text style={styles.text}>MPH</Text>
            <Text style={styles.text}>Gust</Text>
        </View>
    </View>
    </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        borderColor:'black',
        borderWidth:2,
        padding: 10,
        borderRadius:35

    },
    containerSpeed:{
        marginRight:10
    },
    headingText:{
        fontSize:15,
        marginVertical:10,
        fontWeight:'bold'
    },
    windspeed:{
        flexDirection:'row',
        paddingRight:10
        
    },
    speed:{
        fontSize:35
    },
    space:{
        height:20
    },
    text:{
        fontSize:15,
        fontWeight:'bold'
    }
})
export default WindDescription
