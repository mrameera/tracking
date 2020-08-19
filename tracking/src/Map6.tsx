import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'

export default function Map6() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [polylinecoordinates, setPolylinecoordinates] = useState([])
  const [polylinecoordinates2, setPolylinecoordinates2] = useState([])

  const [idd, setIdd] = useState(0);

  const [counter, setCounter] = useState(0);
useEffect(
  () => {
    const id= setTimeout(() => {
        getLocation();
      setCounter(counter + 1);
     // polylinecoordinates.push(counter + 1)
      //console.log(polylinecoordinates)
    }, 5000);
    return () => {
      id;
    };
  },
  [counter],
);

const getLocation = async ()=>{
    const {status} = await Permissions.askAsync(Permissions.LOCATION);

     if(status !== 'granted'){
         console.log('permission not granted')
     }
     const userLocation = await Location.getCurrentPositionAsync({});
     //console.log(userLocation);
     polylinecoordinates2.push( '{'+ userLocation.coords.latitude +','+userLocation.coords.longitude +"}")
     console.log(polylinecoordinates2);

}

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Text>"     "</Text>
      <Text>{polylinecoordinates2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:'center',
    justifyContent:'center',
    marginTop:100,
  },
});