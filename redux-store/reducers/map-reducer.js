import {SET_MAPS, GET_MAP } from './../actions/map-actions'

const initialState = {
      mapList:[],
      activeMap:{}

};

const mapReducer = ( state = initialState, action )=>{
     
      switch(action.type){
            case SET_MAPS:
                 return {
                       mapList:action.maps
                 }
            case GET_MAP:
                  let mapId = action.mapId;
                  return state;
           
            default:
                  return state;
      }
}

export default mapReducer;