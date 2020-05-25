import React , {useState, useEffect} from 'react';
import {useSelector } from 'react-redux';
import {  View, Button} from 'react-native';
import {styles} from '../styles/Styles'
import { Text, Card, ListItem, Divider } from 'react-native-elements'

const SiteScreen = ( {route, navigation })=>{
      const [activeSite, setActiveSite] = useState({})

      const siteList = useSelector( state=>state.site.siteList);
      const [propList, setPropList] = useState([])

      useEffect(() => {
            let siteId = JSON.stringify(route.params.siteId)
            let selected = siteList.find( s=>s.SiteID === parseInt(siteId));
            setActiveSite(selected);
            setPropList(Object.entries(selected))
      }, [route.params?.siteId]);



  return (
        <View>
            <Card>
                <Text h3 >{activeSite.Name}</Text>
                  {
                        propList.map( prop =>{
                              return (
                              <ListItem
                                          title={prop[1]}
                                          subtitle={prop[0]}
                                    />
                              )
                        })
                  }
                </Card>
            
        </View>
   
  );
}

export default SiteScreen;