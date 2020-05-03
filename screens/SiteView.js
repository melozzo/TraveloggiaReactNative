import React , {useState} from 'react';
import {useSelector } from 'react-redux';
import {  Text, View, TextInput, Button,
      } from 'react-native';
import {styles} from './../styles/Styles'


const SiteView = ( {route, navigation })=>{
     let activeSite;
      const {siteList} = useSelector( state=>{
            state.site.siteList
      })
      if(route.params){
            const { siteId } = route.params;
            activeSite=siteList.find(s=>s.SiteID === siteId)
      }
      
      
      
      
      const [goal, setGoal] = useState();
      const [goalList, setGoalList] = useState([]);

      const handleChangeText=(txt)=>{
            setGoal(txt);
      }
      const handleAddGoal = ( )=>{
            console.log(goal)
            setGoalList(goalList=>[...goalList,{id:Math.random().toString() , value:goal}]);
      } 

  return (
        <View style={styles.screen}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <TextInput 
                        onChangeText = {handleChangeText}
                        value={activeSite.Name}
                        placeholder='you really suck'
                        style={{
                              width:200,
                              borderBottomColor:"black",
                              borderBottomWidth:1
                        }}
                  
                  />
                  <Button title="add to list"
                        onPress= {handleAddGoal}/>
            </View>
            
        </View>
   
  );
}

export default SiteView;