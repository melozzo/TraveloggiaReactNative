import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {  Text, View, FlatList, Button} from 'react-native';
import {styles} from './../styles/Styles'
import * as mapActions  from './../redux-store/actions/map-actions'
import * as siteActions from './../redux-store/actions/site-actions';


const MapList = ( {navigation})=>{
      
      let memberId=46996;
      const dispatch = useDispatch();
      
      useEffect(()=>{
            dispatch(mapActions.fetchMaps(memberId))
      },[dispatch, memberId])

      const userMaps = useSelector( state =>state.map.mapList)

    
      return (
            <View style={styles.screen}>
                { userMaps.length > 0 &&
                              <FlatList 
                                    data= {userMaps}
                                    keyExtractor={item=> item._id}
                                    renderItem={({ item }) => <View>
                                    <Text>{item.MapName}</Text>
                                    <Button 
                                          title={'select'}
                                          onPress={() =>selectMap(item)}/>
                              </View>}
                              />
                }  
            </View>
      )


      function selectMap(map){
            dispatch(siteActions.fetchSites(map.MapID))
            navigation.navigate('Map',{screen:"Map", params:{mapId:map.MapID}});
      }

}

export default MapList;