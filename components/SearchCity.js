import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import color from '../config/color';

const SearchCity = ({ handleCity, setSearchCity, searchCity}) => {
    const handleChangeText = (text) =>  setSearchCity(text); // Update the searchCity state for city names

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                placeholder='Search City....'
                placeholderTextColor="white"
                onChangeText={handleChangeText}
                value={searchCity}
            />
             <TouchableOpacity onPress={handleCity}>
                <View style={styles.iconContainer}>
                    <EvilIcons name="search" size={35} color="white"/>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({   
    container: {
        marginVertical: 30,
        borderRadius: 35,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        borderColor: color.white,
        borderWidth: 2,
        justifyContent: 'space-between'
    },
    textinput: {
        color: color.white,
        fontSize: 18,
        flex: 1
    },
    iconContainer: {
        padding: 5,
    },
});

export default SearchCity;
