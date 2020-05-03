import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {  View, Text} from 'react-native';
import {styles} from '../styles/Styles'
import MapView from 'react-native-maps';


const MapScreen = ( {route, navigation})=>{
      let activeMap= {MapName:''};
      const mapList = useSelector( state => state.map.mapList)
      if(route.params ){
            const { mapId } = route.params;
            activeMap=mapList.find(m=>m.MapID=== mapId);
      }

      
         

      return (
            <View style={styles.screen}>
                  <Text>{activeMap.MapName}</Text>
                  <MapView style={styles.map} />
            </View>
      )

}

export default MapScreen;