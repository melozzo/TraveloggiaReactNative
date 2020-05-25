import React, {useEffect, useState} from 'react';
import AlbumScreen from './../screens/AlbumScreen';
import MapScreen from './../screens/MapScreen';
import SiteScreen from '../screens/SiteScreen';
import SiteList from './../screens/SiteList';
import JournalView from './../screens/JournalView';
import MapList from './../screens/MapList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,  DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import * as siteActions from './../redux-store/actions/site-actions';
import {useSelector , useDispatch} from 'react-redux';
const Tab = createBottomTabNavigator();
const SiteListDrawer = createDrawerNavigator();
const MapStack = createStackNavigator();
const TabStack = createStackNavigator();
const AlbumStack = createStackNavigator();
const SiteStack = createStackNavigator();


const MapStackComponent = ({ navigation }) =>{
       return (
             <MapStack.Navigator initialRouteName="Map">
                  <MapStack.Screen
                  name="Map"
                  component={MapScreen}
                  options={({ route }) => ({ 
                        title: 'Map Screen',
                        headerStyle: {
                              backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#114477',
                        headerTitleStyle: {
                              fontWeight: 'bold',
                        },
                        headerLeft: () => (
                              <Button
                              onPress={() => {alert('This is a button!');
                              navigation.toggleDrawer();
                                    }}
                              title="Info"
                              color="#113388"
                              />
                        ),

                  })}
                  />
      </MapStack.Navigator>
      );
}


const AlbumStackComponent = ({ navigation }) =>{
      return (
            <AlbumStack.Navigator initialRouteName="Album">
                 <AlbumStack.Screen
                        name="Album"
                        component={AlbumScreen}
                        options={({ route }) => ({ 
                              title: 'Album Screen',
                              headerStyle: {
                                    backgroundColor: '#f4511e',
                              },
                              headerTintColor: '#114477',
                              headerTitleStyle: {
                                    fontWeight: 'bold',
                              },
                              headerLeft: () => (
                                    <Button
                                    onPress={() => {alert('This is a button!');
                                    navigation.toggleDrawer();
                                          }}
                                    title="Info"
                                    color="#113388"
                                    />
                              ),

                        })}
                 />
     </AlbumStack.Navigator>
     );
}

const SiteStackComponent = ({ navigation }) =>{
      return (
            <SiteStack.Navigator initialRouteName="Site">
                 <SiteStack.Screen
                        name="Site"
                        component={SiteScreen}
                        options={({ route }) => ({ 
                              title: 'Site Screen',
                              headerStyle: {
                                    backgroundColor: '#f4511e',
                              },
                              headerTintColor: '#114477',
                              headerTitleStyle: {
                                    fontWeight: 'bold',
                              },
                              headerLeft: () => (
                                    <Button
                                    onPress={() => {
                                    navigation.toggleDrawer();
                                          }}
                                    title="Info"
                                    color="#113388"
                                    />
                              ),

                        })}
                 />
     </SiteStack.Navigator>
     );
}


const CustomDrawerContent = (props) =>{
      const dispatch = useDispatch();
      let mapId = 22364;
      const siteList = useSelector( state =>state.site.siteList);
      return (
                        <DrawerContentScrollView {...props}>
                              {
                                  siteList.length >0 &&   siteList.map(site=>{
                                             return   <DrawerItem label={site.Name? site.Name:""} 
                                             onPress={   () => props.navigation.navigate("Site",{screen:"Site", params:{siteId:site.SiteID}}) }
                                          
                                           />
                                    })
                              }
                             
                        </DrawerContentScrollView>
                  );
}


const Drawer = ()=>{
      return (<SiteListDrawer.Navigator 
                        drawerContent={props => <CustomDrawerContent {...props} />}
                        initialRouteName="Tabs">
                                      <SiteListDrawer.Screen
                                          name="Tabs"
                                          component={TabNavigatorComponent}
                                    />
                                   
                              </SiteListDrawer.Navigator>
                        )
}

const TabNavigatorComponent = ( )=>{
      return (
            <Tab.Navigator  initialRouteName="Map">
                  <Tab.Screen name="MapList" component={MapList} />
                  <Tab.Screen name="Map"
                   component={MapStackComponent}
                      />
            <Tab.Screen name="Album" component={AlbumStackComponent} />
            <Tab.Screen name="Site" component={SiteStackComponent} />
            <Tab.Screen name="Journal" component={JournalView} />
      </Tab.Navigator>

      )

}


const RootNavigation = ( props )=>{

  return (

      <NavigationContainer>
            <Drawer />
      </NavigationContainer>
  )

}

export default RootNavigation