import * as React from 'react';
import AlbumScreen from './../screens/AlbumScreen';
import MapScreen from './../screens/MapScreen';
import SiteView from './../screens/SiteView';
import JournalView from './../screens/JournalView';
import MapList from './../screens/MapList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,  DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import SiteList from './../screens/SiteList'

//const Tab = createBottomTabNavigator();
const SiteListDrawer = createDrawerNavigator();
const MapStack = createStackNavigator();

function CustomDrawerContent(props) {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}
          />
        </DrawerContentScrollView>
      );
    }



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



const Drawer = ()=>{
return (<SiteListDrawer.Navigator 
//drawerContent={(props) => {return (<CustomDrawerContent {...props}/>)}}>
            //drawerContent={(props)=>{return(<View><Text>I am a drawer</Text></View>)}}>
                              initialRouteName="Map">
                         <SiteListDrawer.Screen
                              name="SiteList"
                              component={SiteList}
                        /> 
                          <SiteListDrawer.Screen
                              name="Map"
                              component={MapStackComponent}
                        />
                  </SiteListDrawer.Navigator>
            )
}

// const TabNavigatorComponent = ( )=>{
//       return (
//             <Tab.Navigator  initialRouteName="Map">
//                   <Tab.Screen name="MapList" component={MapList} />
//                   <Tab.Screen name="Map"
//                   component={MapScreen}
//                   screenOptions={{
//                         title: 'Map',
//                         headerStyle: {
//                           backgroundColor: '#114477',
//                           height:70
//                         },
//                         headerTintColor: 'black',
//                         headerTitleStyle: {
//                           fontWeight: 'bold',
//                         },
//                         headerRight: () => (
//                               <Button
//                                     title="Save Location"
//                                     onPress={() => alert('Save Your Location')}
//                                     color="#fff"
//                               />
//                             ),
//                       }} />
//             <Tab.Screen name="Album" component={AlbumScreen} />
//             <Tab.Screen name="Site" component={SiteView} />
//             <Tab.Screen name="Journal" component={JournalView} />
//       </Tab.Navigator>

//       )

// }


const RootNavigation = ( props )=>{

  return (

      <NavigationContainer>
            <Drawer />
      </NavigationContainer>
  )

}

export default RootNavigation