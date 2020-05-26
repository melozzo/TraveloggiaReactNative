

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
      let memberId=46996;// email white@album pwd snow
      const dispatch = useDispatch();
      const laCarte = useRef(null);
      const [mapId, setMapId] = useState(22364);

      let siteList = useSelector( state=> state.site.siteList);



      const [currentLocation, setCurrentLocation] = useState({latitude:0,longitude:0});
      const [savePromptVisible, setSavePromptVisible]= useState(true);
      const [activeRegion, setActiveRegion] = useState();
      const [coordList, setCoordList] = useState([]);

      useEffect(()=>{
            if(route.params && route.params.mapId){
                  let id = JSON.stringify(route.params.mapId);
                  setMapId( parseInt(id) );
            }
            setSavePromptVisible(true);
      },[route.params?.mapId]);

      useEffect(()=>{
            dispatch(siteActions.fetchSites(mapId))
      },[mapId]);

      useEffect(()=>{
            let coords = [];
            for( let i=0; i< siteList.length; i++){
                  let marker = siteList[i];
                  coords.push({latitude:marker.Latitude, longitude:marker.Longitude});
                  setCoordList(coords);
                
            }
      },[siteList])

      return (
            <View style={styles.screen}>
                   <ModalPrompt
                        visible={savePromptVisible}
                        onClickYes={zoomToExtent}
                        onDismiss={()=>{setSavePromptVisible(false)}}
                  /> 
                 

                  <MapView ref={laCarte}
                        provider={PROVIDER_GOOGLE}
                       // onLayout={ zoomToExtent}
                      //  showsUserLocation={true}
                        style={styles.map}
                        // region={{
                        //       latitude: currentLocation.latitude,
                        //       longitude: currentLocation.longitude,
                        //       latitudeDelta: LATITUDE_DELTA,
                        //       longitudeDelta: LONGITUDE_DELTA,
                        // }}
                  >
                          {siteList.map((marker,i )=> (
                              <Marker
                                    title={marker.Name}
                                    key={i}
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

      function zoomToExtent(){
           
            laCarte.current.fitToCoordinates(coordList, {edgePadding: { top:120, right: 20, bottom: 140, left: 20 },
                  animated: false});
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

      function saveCurrentLocation(){
            alert("location saved")
      }

      function calculateRegion(){
            // const { width, height } = Dimensions.get('window');
            // const ASPECT_RATIO = width / height;
            // const LATITUDE = 33.04652;
            // const LONGITUDE = -117.29960;
            // const LATITUDE_DELTA = 0.0922;
            // const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
            // const SPACE = 0.01;
      }
      

      function fullExtent(){
      
                  laCarte.current.fitToCoordinates([{latitude:45.4046983,longitude:12.2469058 },{latitude:45.4066028,longitude:11.8210339}], {
                    edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
                    animated: true,
                  });

      }
}

export default MapScreen;



      

      // useEffect(()=>{
            // if(route.params && route.params.memberId){
      //       let  memberId  = route.params.memberId;
//}
//       dispatch(mapActions.fetchLastMap(memberId))
// },[dispatch])