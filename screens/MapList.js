import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {  Text, View, FlatList, Button} from 'react-native';
import {styles} from './../styles/Styles'
import * as mapActions  from './../redux-store/actions/map-actions'

const MapList = ( {navigation})=>{
      const userMaps = useSelector( state =>state.map.mapList)
      const memberId=46996;
      const dispatch = useDispatch();
     
      useEffect(()=>{
            dispatch(mapActions.fetchMaps(memberId))
      },[dispatch, memberId])
   
    
      return (
            <View style={styles.screen}>
                  <FlatList 
                        data= {userMaps}
                        keyExtractor={item => item.MapID}
                              renderItem={ 
                                    ( {item} ) =>(
                                    <View>
                                          <Text>{item.MapName}</Text>
                                          <Button 
                                                title={'select'}
                                          onPress={() => navigation.navigate('Map',{
                                                mapId:item.MapID
                                          })}/>
                                    </View>
                                    )
                              }
                  />
            </View>
      )

}

export default MapList;