import * as React from 'react';
import AlbumScreen from './../screens/AlbumScreen';
import MapScreen from './../screens/MapScreen';
import SiteView from './../screens/SiteView';
import JournalView from './../screens/JournalView';
import MapList from './../screens/MapList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet,  View, 
      } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

      const Tab = createBottomTabNavigator();
      const Stack = createStackNavigator();

const RootNavigation = ( props )=>{

  return (

<NavigationContainer>
            <Tab.Navigator  initialRouteName="Map">
                  <Tab.Screen name="MapList" component={MapList} />
                  <Tab.Screen name="Map" component={MapScreen} />
                  <Tab.Screen name="Album" component={AlbumScreen} />
                  <Tab.Screen name="Site" component={SiteView} />
                  <Tab.Screen name="Journal" component={JournalView} />
            </Tab.Navigator>
    </NavigationContainer>

    
    
    
    
    // <NavigationContainer>
      //       <Stack.Navigator initialRouteName="Map">
      //             <Stack.Screen name="Map" component={MapView} />
      //             <Stack.Screen name="Album" component={AlbumView} />
      //       </Stack.Navigator>
      // </NavigationContainer>
  )    


  const styles = StyleSheet.create({
      outermost: {
            padding:50
      }
   });

}

export default RootNavigation