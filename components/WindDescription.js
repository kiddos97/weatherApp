import React from 'react'
import { SafeAreaView, View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import color from '../config/color';

const WindDescription = ({ onPress }) => {
  return (
     <TouchableOpacity onPress={onPress}>
         <View style={styles.container}>
         <View style={styles.windheader}>
            <Feather style={styles.icon} name="wind" size={25} color={color.white}/>
            <Text style = {styles.headingText}>
                Wind
            </Text>
             </View>
          <View style={styles.row}>
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
          </View>
          <View style={styles.row}>
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
          <View style={styles.imageContainer}>
              <Image
                source={require('../app/assets/compass.png')}
                style={{ width: 100, height: 100}}
                tintColor={color.white}
              />
            </View>
             </View>
     </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', // Primary axis
      padding:20,
      borderColor:color.white,
      borderWidth:2,
      borderRadius:35,
      justifyContent:'space-between',
      backgroundColor:'rgba(0,0,0,0.5)'
    },
    row: {
      flexDirection: 'row', // Align items horizontally
      marginBottom: 10, // Spacing between rows
    },
    column: {
      width: 100, // Width of each column
      height: 100, // Height of each column
      backgroundColor: 'blue', // Background color
      marginHorizontal: 5, // Spacing between columns
    },
    windheader:{
        flexDirection:'row',
        marginRight:20,
        marginVertical:20
    },
    windspeed:{
        flexDirection:'column',
        marginBottom:10
        
    },
    headingText:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:10,
        color:color.white,
        textTransform:'uppercase'
    },
    containerSpeed:{
        marginRight:20
    },
    speed:{
        fontSize:35,
        color:color.white,
        marginBottom:10,
        fontWeight:'bold'
    },
    imageContainer:{
      justifyContent:'center',
       alignItems:'flex-end'
     },
     text:{
        fontSize:15,
        fontWeight:'bold',
        color:color.white,
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    icon:{
        marginRight:10
    }
  });
export default WindDescription
