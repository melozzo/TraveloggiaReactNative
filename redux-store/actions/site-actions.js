export const SET_SITES = 'SET_SITES';
export const SET_SITE = 'SET_SITE';

const baseURL= 'http://localhost:7070'

export const fetchSites = (mapId)=>{ 
      return async dispatch =>{
       const response = await fetch(`${baseURL}/site/list/${mapId}`,
            {
                  method:'GET',
                  headers:{
                        'Content-Type':'application/json'
                  },
            })
            const data = await response.json();
            console.log('returning sites' ,data)
            dispatch({
                  type:SET_SITES,
                  sites: data
            })
      }
}
