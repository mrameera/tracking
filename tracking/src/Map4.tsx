import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-elements';
import { View,StyleSheet,Alert, Image } from 'react-native';
import {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';


import { walfClient } from './WalfClient';

import { TouchableOpacity } from 'react-native-gesture-handler';


// TODO: show go To my Location button on map

const Map4 = () => {

  
  const [salons, setSalons] = useState<undefined | any>(undefined);
  const [region, setRegion] = useState({
    latitude: 31.905531,
    longitude: 35.205792,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
 

  useEffect(() => {   

    (async () => {
     
      
      let  status  =  Location.requestPermissionsAsync();
      // setStatuss(status);
      
      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
      setRegion({latitude:location.coords.latitude,longitude:location.coords.longitude,latitudeDelta:0.01,longitudeDelta:0.01});
      console.log(location.coords.latitude)
      console.log(location.coords.longitude)
    })();
    
  }, []);

 
  

  const retMap = () => {
    console.log("in ret");
      return(
        <View style={{ flex: 1 }}>
        <MapView
        style ={{flex:1}}
          region={{ 
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        </View>
      )
  }

  return ( 
      
    retMap()
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute', top: 0, left: 0, 
    backgroundColor: '#00000027', height: 60, width: '100%',
    zIndex: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerButton: {
    width: 100,
    borderWidth: 1, 
    borderColor: '#ffffff57',
    backgroundColor: '#00000017',
    borderRadius: 10,
    flexDirection: 'row', 
    justifyContent: 'center',
    marginHorizontal: 2
  },
  headerButtonSelected: {
    backgroundColor: '#383c416b',
    borderColor: '#383c416b',
  },
  headerButtonName:{
    textAlign: "center",
    marginHorizontal: 2
  },
  headerButtonNameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

export default Map4;
