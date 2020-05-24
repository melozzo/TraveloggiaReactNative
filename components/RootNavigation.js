import * as React from 'react';
import AlbumScreen from './../screens/AlbumScreen';
import MapScreen from './../screens/MapScreen';
import SiteView from './../screens/SiteView';
import JournalView from './../screens/JournalView';
import MapList from './../screens/MapList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,  DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import SiteList from './../screens/SiteList'

const Tab = createBottomTabNavigator();
const SiteListDrawer = createDrawerNavigator();
const MapStack = createStackNavigator();
const TabStack = createStackNavigator();
const AlbumStack = createStackNavigator();



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

    
    function CustomDrawerContent(props) {
      return (
        <DrawerContentScrollView {...props}>
          
          <DrawerItem label="Help" onPress={() => alert('Link to help')} />
          <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
      );
    }

const Drawer = ()=>{
      return (<SiteListDrawer.Navigator 
            drawerContent={props => <CustomDrawerContent {...props} />}
                        //drawerContent={(props)=>{return(<View><Text>I am a drawer</Text></View>)}}>
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
            <Tab.Screen name="Site" component={SiteView} />
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