

import React, {useState, useEffect} from 'react';
//import {Text} from 'react-native-elements';
import { View,StyleSheet,Text, Image } from 'react-native';
//import {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { ClusterMap } from "react-native-cluster-map";
//import { walfClient } from '../../WalfClient';
//import { useWalfSelector } from '../../data/reducers';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

// TODO: show go To my Location button on map

const MAP = () => {


  const [region, setRegion] = useState({
    latitude: 31.905531,
    longitude: 35.205792,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
  
  const [showType, setShowType] = useState('1')
  const [mapmargin, setMapmargin] = useState(50)

  useEffect(() => {   

   
     
      let location =  Location.getCurrentPositionAsync({});
      // setLocation(location);
      setRegion({latitude:location.coords.latitude,longitude:location.coords.longitude,latitudeDelta:0.01,longitudeDelta:0.01});
      setMapload(true);
  
    
  }, []);


  const retMap = () => {
 
      return(
        <View style={{flex:1}}>
          
          <ClusterMap 
          //TODO:MAKE BUTTON POSITION RESPANSIVE
                

          onRegionChangeComplete={region => setRegion(region)}
              //initialRegion={Region}
              region={region}
              showsUserLocation={true}
              showsMyLocationButton={true}
              showsPointsOfInterest={true}
              showsCompass={false}
              onMapReady={()=> {setMapmargin(60)}}
              style={{flex: 1, marginTop: mapmargin}}
          >
          
          </ClusterMap>
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

export default MAP;
