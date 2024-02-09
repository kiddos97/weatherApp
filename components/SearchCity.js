
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import React from 'react';
import color from '../config/color';



const SearchCity = ({searchCity, handleCity, setSearchCity}) => {


  return (
   <SafeAreaView>
       <View style={styles.container}> 
       <TextInput
       style={styles.textinput}
       placeholder='Search City....'
       placeholderTextColor="white"
       onChangeText={text => setSearchCity(text)}
       value={searchCity}/>
       <TouchableOpacity onPress={handleCity}>
           <View style={styles.iconContainer}>
               <EvilIcons name="search" size={35} color="white"/>
           </View>
       </TouchableOpacity>
       </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
   
    container:{
        marginVertical: 30,
        borderRadius: 35,
        padding:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        flexDirection:'row',
        borderColor:color.white,
        borderWidth:2,
        justifyContent:'space-between'
        
    },
    textinput:{
        color:color.white,
        fontSize: 18,
    },
    iconContainer: {
        padding: 5,
      },
})
export default SearchCity
