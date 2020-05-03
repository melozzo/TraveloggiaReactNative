import React, {useState, useEffect} from 'react';
import * as DataTransport from './components/DataTransport'

const RootContainer = ( props) =>{
      const [activeMap, setActiveMap]=useState();
      const [siteList, setSiteList ] = useState([]);
      const [photoList, setPhotoList] = useState([]);

      useEffect(()=>{
          const map =   DataTransport.getMap(46996);
          setSiteList(map.Sites)
      })


            


}