import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-elements';
import { View,StyleSheet,Platform, Dimensions } from 'react-native';
//import {Marker} from 'react-native-maps';
import * as Location  from 'expo-location';
import * as Permissions from 'expo-permissions'
import MapView ,{  Polyline ,Marker, AnimatedRegion }from 'react-native-maps';
import {Callapi} from './Callapi';


// TODO: show go To my Location button on map

const Map5 = () => {
 
  const [LatLng, setLatLng] = useState({
    latitude: 1,
    longitude: 1,
  });
  const [polylinecoordinates, setPolylinecoordinates] = useState([{ latitude: 31.9444057, longitude: 35.0303525 }])
  const [counter, setCounter] = useState(0);
 let coor =[];

  const [region, setRegion] = useState({
    latitude: 31.905531,
    longitude: 35.205792,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
 
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
  
     polylinecoordinates.push({
      latitude: userLocation.coords.latitude,
      longitude: userLocation.coords.longitude
    })
     console.log(polylinecoordinates);


}


    const sendlocation =(x, y) =>{
      async () => {
        // Make a request for a user with a given ID
        Callapi.post('auth/login', {
            lat: x,
            long: y,
        })
        .then(function (response) {
          console.log('succses sending data')
        })
        .catch(function (error) {
           console.log('fail to send data error '+ error)
          });
        }
    }

    

  const returnPolymap =()=>{
      return(
             < MapView
                    style={{width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height}}  
                    onRegionChange = {region=>region}
                    initialRegion={region}
             >
                <Polyline
                    coordinates={coor}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={8}
                />
             </MapView>
            )
   }
  
  return ( 
    
    <View>
        <View style={{flex: 1}}>
           {returnPolymap()}
        </View>
    </View>
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

export default Map5;
