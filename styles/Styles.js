
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    paddingTop:50,
    backgroundColor:'blue'
  },
  map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  }
  
});