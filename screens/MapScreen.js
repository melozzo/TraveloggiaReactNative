

import React, { useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {  View, Button, Dimensions, Modal, StyleSheet} from 'react-native';
import {styles} from '../styles/Styles'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as mapActions from './../redux-store/actions/map-actions';
import ScreenHeader from './../components/ScreenHeader';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import ModalPrompt from './../components/ModalPrompt'
import * as siteActions from './../redux-store/actions/site-actions';

const MapScreen = ( {route, navigation})=>{
      let memberId=46996;
      const dispatch = useDispatch();
      const laCarte = useRef(null);
      const [mapId, setMapId] = useState(22364);
      let siteList = useSelector( state=> state.site.siteList)

      useEffect(()=>{
            if(route.params && route.params.mapId){
                  let id = JSON.stringify(route.params.mapId);
                  setMapId( parseInt(id) );
            }
      },[route.params?.mapId])

      // if(route.params ){
      //       const { memberId } = route.params;
      // }

      // useEffect(()=>{
      //       dispatch(mapActions.fetchLastMap(memberId))
      // },[dispatch])

      useEffect(()=>{
            dispatch(siteActions.fetchSites(mapId))
      },[mapId]);

      const [currentLocation, setCurrentLocation] = useState({latitude:0,longitude:0});
      const [savePromptVisible, setSavePromptVisible]= useState(false)



      const { width, height } = Dimensions.get('window');
      const ASPECT_RATIO = width / height;
      const LATITUDE = 33.04652;
      const LONGITUDE = -117.29960;
      const LATITUDE_DELTA = 0.0922;
      const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
      const SPACE = 0.01;

     

    
 
      return (
            <View style={styles.screen}>
                   <ModalPrompt
                        visible={savePromptVisible}
                        onClickYes={saveCurrentLocation}
                        onDismiss={()=>{setSavePromptVisible(false)}}
                  /> 
                 

                  <MapView ref={laCarte}
                        provider={PROVIDER_GOOGLE}
                      //  showsUserLocation={true}
                        style={styles.map}
                        // region={{
                        //       latitude: currentLocation.latitude,
                        //       longitude: currentLocation.longitude,
                        //       latitudeDelta: LATITUDE_DELTA,
                        //       longitudeDelta: LONGITUDE_DELTA,
                        // }}
                  >
                          {siteList.map(marker => (
                              <Marker
                                    title={marker.Name}
                                   
                                    key={marker.SiteID}
                                    coordinate={{latitude:marker.Latitude, longitude:marker.Longitude}}
                              />
                              ))} 

                  </MapView>
            </View>
      )

      function renderSites(){
            if (siteList)
            siteList.map(site => {
                  let LatLng={
                        latitude:site.Latitude,
                        longitude:site.Longitude
                  }
            return (      <Marker
                        coordinate={LatLng}
                        title={site.Name}
                  //  description={site.Description}
                  /> )
            });
      }

      function saveCurrentLocation(){

      }

      function getCurrentLocation(){
           // let { status } = await Location.requestPermissionsAsync();
            // if (status !== 'granted') {
            //       alert('Permission to access location was denied');
            // }
            //.coords.latitude .longitude
            //let location = await Location.getCurrentPositionAsync({accuracy:5, timeout:5000});
            setCurrentLocation( {latitude:33.04652,longitude:-117.29960});
            setSavePromptVisible(true);
      }

      function fullExtent(){
      
                  laCarte.current.fitToCoordinates([{latitude:45.4046983,longitude:12.2469058 },{latitude:45.4066028,longitude:11.8210339}], {
                    edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
                    animated: true,
                  });

      }
}

export default MapScreen;