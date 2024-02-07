import React from 'react'
import { View, StyleSheet } from 'react-native';
import MapView, { Marker} from 'react-native-maps';

const Test = () => {
  return (
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
        </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
 padding:20,
 paddingTop:60,
},
mapContainer:{
    backgroundColor: '#fff',
    borderRadius:30,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20},
    margin: 10,
    height:'50%',

},
map: {
  width: '100%',
  height: '100%',
  borderRadius:30,
},
});

export default Test
