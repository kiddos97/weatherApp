import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';

const SearchCity = () => {
  return (
   <SafeAreaView>
       <View style={styles.container}>
       <TextInput style={styles.textinput} placeholder='Search City....'/>
       </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
   
    container:{
        marginVertical: 20,
        borderRadius: 35,
        backgroundColor:'red',
        padding:10,
        flexDirection:'row',
        borderColor:'black',
        borderWidth:1
        
    },
    textinput:{
        color:'black',
        fontSize: 18
    }
})
export default SearchCity
