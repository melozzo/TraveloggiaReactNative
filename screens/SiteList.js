import React, {useEffect, useState} from 'react';
import {useSelector } from 'react-redux';
import {  Text, View, FlatList} from 'react-native';
import {styles} from './../styles/Styles'

const SiteList = ( {navigation} )=>{

      const {siteList} = useSelector( state=>{
            state.site.siteList
      })
    

      return (
            <View style={styles.screen}>
                  <FlatList 
                        data = {siteList}
                        keyExtractor = {item=>item.SiteID}
                        renderItem={ ({item})=>(
                                    <View>
                                          <Text>{item.Name}</Text>
                                          <Button onPress={() => navigation.navigate('Site',{
                                                siteId:item.SiteID
                                          })}/>
                                    </View>)
                        }
                  />
            </View>
      )

}

export default SiteList;