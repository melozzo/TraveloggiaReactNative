import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {  Text, View, FlatList, Button} from 'react-native';
import {styles} from './../styles/Styles'
import * as mapActions  from './../redux-store/actions/map-actions'
import ScreenHeader from './../components/ScreenHeader';


const MapList = ( {navigation})=>{
      
      let memberId=46996;
      const dispatch = useDispatch();
      
      useEffect(()=>{
            dispatch(mapActions.fetchMaps(memberId))
      },[dispatch, memberId])

      const userMaps = useSelector( state =>state.map.mapList)
    
      return (
            <View style={styles.screen}>
                  <ScreenHeader>
                       <Text></Text>
                      
                 </ScreenHeader>
                  <FlatList 
                        data= {userMaps}
                        keyExtractor={item => item.MapID}
                              renderItem={ 
                                    ( {item} ) =>(
                                    <View>
                                          <Text>{item.MapName}</Text>
                                          <Button 
                                                title={'select'}
                                                onPress={() =>selectMap(item)}/>
                                    </View>
                                    )
                              }
                  />
            </View>
      )


      function selectMap(map){
            navigation.navigate('Map',{screen:"Map", params:{mapId:map.MapID}});
            // dispatch({
            //       type:SET_MAP,
            //       map: map
            // })
      }

}

export default MapList;