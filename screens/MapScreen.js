

import React, { useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {  View, Dimensions, Modal, StyleSheet} from 'react-native';
import {styles} from '../styles/Styles'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as mapActions from './../redux-store/actions/map-actions';
import ScreenHeader from './../components/ScreenHeader';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import ModalPrompt from './../components/ModalPrompt'
import * as siteActions from './../redux-store/actions/site-actions';
import { ListItem, Header } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';

const LeftButtonComponent=(props)=>{
      const {showList} = props;
      return <Button
     
      icon={<Fontisto name="nav-icon-list-a" size={24} color="black" />}
      title="  Sites"
      onPress={() => {
         showList();
                  }}
    />
}

const CurrentLocationComponent=(props)=>{
      const {getLocation} = props;
      return <Button
     iconRight
      icon={<Fontisto name="map-marker" size={24} color="black" />}
      title="Locate  "
      onPress={() => {
         getLocation();
                  }}
    />
}

const MapScreen = ( {route, navigation})=>{
      let memberId=46996;// email white@album pwd snow
      const dispatch = useDispatch();
      const laCarte = useRef(null);
      const [mapId, setMapId] = useState(22364);

      let siteList = useSelector( state=> state.site.siteList);
      const [currentLocation, setCurrentLocation] = useState({latitude:0,longitude:0});
      const [savePromptVisible, setSavePromptVisible]= useState(false);
      const [defaultRegion, setDefaultRegion] = useState();
      const [coordList, setCoordList] = useState([]);

      useEffect(()=>{
            if(! route.params ){
                  getCurrentLocation();
            }
            
      },[route.params?.mapId]);

      useEffect(()=>{
            if(route.params && route.params.mapId){
                  let id = JSON.stringify(route.params.mapId);
                  setMapId( parseInt(id) );
            }
            setSavePromptVisible(true);
      },[route.params?.mapId]);

      useEffect(()=>{
            let coords = [];
            for( let i=0; i< siteList.length; i++){
                  let marker = siteList[i];
                  coords.push({latitude:marker.Latitude, longitude:marker.Longitude});
                  setCoordList(coords);
            }
      },[siteList]);

      useEffect(()=>{
            if(coordList.length > 0)
                  zoomToExtent();
     },[coordList])

      return (
            <View style={styles.screen}>
                   {/* <ModalPrompt
                        visible={savePromptVisible}
                        onClickYes={zoomToExtent}
                        onDismiss={()=>{getCurrentLocation}}
                  />  */}
                    <Header
                        leftComponent={<LeftButtonComponent  showList={toggleDrawer} />}
                        placement="center"
                        centerComponent={{ text: 'My Map', style: { color: '#fff' } }}
                        rightComponent={ <CurrentLocationComponent getLocation={getCurrentLocation}/> }></Header>

                  <MapView style={{position:'absolute',top:'0',left:'0',right:'0',bottom:'20'}}
                        ref={laCarte}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation={false}
                        style={styles.map}
                        region={defaultRegion}
                  >
                        {
                            siteList.map((marker,i )=> {
                                if(marker.Latitude && marker.Longitude ){
                                    return (
                                          <Marker
                                                title={marker.Name}
                                                key={i}
                                                coordinate={{latitude:marker.Latitude, longitude:marker.Longitude}}
                                          />
                                          )
                                    }
                              })
                        }  

                  </MapView>
            </View>
      )

      function toggleDrawer(){
            navigation.toggleDrawer();
      }

      async function getCurrentLocation(){
           const LONGITUDE_DELTA=.09;
           const LATITUDE_DELTA=.04;
                
            let { status } = await Location.requestPermissionsAsync();
                  if (status !== 'granted') {
                        alert('Permission to access location was denied');
                        return;
                  }
               
                  let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
     
                  let region =  {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                  };
                  setDefaultRegion(region);
                  setSavePromptVisible(false);
            }

      function zoomToExtent(){
            laCarte.current.fitToCoordinates(coordList, {edgePadding: { top:120, right: 20, bottom: 140, left: 20 },
            animated: false});
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