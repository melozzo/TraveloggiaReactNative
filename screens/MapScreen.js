import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,
      FlatList} from 'react-native';

import {styles} from '../styles/Styles'
import MapView from 'react-native-maps';

const MapScreen = ( props)=>{

      return (
            <View style={styles.screen}>
                  <MapView style={styles.map} />
            </View>
      )

}

export default MapScreen;