
export const SET_MAPS = 'SET_MAPS';


const baseURL= 'http://localhost:7070'

export const fetchMaps = (memberId)=>{ 

      return async dispatch =>{
       const response = await fetch(`${baseURL}/map/list/${memberId}`,
            {
                  method:'GET',
                  headers:{
                        'Content-Type':'application/json'
                  },
            })
           
            const data = await response.json();
            console.log('returning maps' ,data)
            dispatch({
                  type:SET_MAPS,
                  maps: data
            })
      }


      return {
            type:GET_MAPS,
            memberId : id
      }
}

export const getMap = (id)=>{ 
      return {
            type:GET_MAP,
            mapId : id
      }
}