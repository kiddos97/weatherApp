import React, { useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, Text, View,StyleSheet,Platform, StatusBar, ActivityIndicator} from 'react-native'
import MapView, { Marker} from 'react-native-maps';
import color from '../../../config/color';
import Feather from 'react-native-vector-icons/Feather';
import * as Location from 'expo-location'
import { useNavigation, useRoute } from '@react-navigation/native';



const WindSpeedScreen = () => {

  const route = useRoute();



  return (
    <ImageBackground
    style={styles.screen}
    source={require('../../assets/background.jpg')}
    blurRadius={10}
    >

        <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                    
                          }}>
                              <Marker
                            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                          />
                          </MapView>
                          <View style={styles.windDescriptionContainer}>
                            <View style={styles.DescriptionContainer}>
                              <Text style={styles.text}>Wind Direction</Text>
                              <View style={styles.directionContainer}>
                              <View style={styles.iconContainer}>
                                <Feather name="wind" color={color.white} size={30}/>
                              </View>
                              <Text style={styles.direction}>{route.params?.searchCity}</Text>
                                </View>
                            </View>
                          </View>
                </View>
          </View>

    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1
    },
    container: {
      padding:20,
      paddingTop:60,
     },
     mapContainer:{
         backgroundColor: color.backgroundColor,
         borderRadius:30,
         shadowOpacity: 1,
         shadowRadius: 2.5,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 20},
         margin: 10,
         height:'50%'
     },
     directionContainer:{
        flexDirection:'row',
        justifyContent:"space-evenly"
     },
     map: {
       width: '100%',
       height: '100%',
       borderRadius:30,
     },
     windDescriptionContainer:{
      paddingTop:40
     },
     DescriptionContainer:{
      padding: 20,
      borderWidth:2,
      borderColor: color.white,
      borderRadius:30,
      backgroundColor:color.backgroundColor,
     },
     text:{
      color:color.white,
      textAlign:'center',
      fontWeight:'bold',
      fontSize:15
     },
     direction:{
      color:color.white,
      paddingTop:30,
      fontSize:25,
      fontWeight:'bold'
     },
     iconContainer:{
      marginVertical: 30
     }
})

export default WindSpeedScreen
