import React, {useState} from 'react';
import {MapContainer, Marker, Popup,useMapEvents} from 'react-leaflet';
import cities from './cities';
import leafletKnn from 'leaflet-knn';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';



export const LocationMarker=()=> {

    const [nearestt, setNearestt] = useState()
    // const [near, setNear] = useState(nearestt)
    const [position, setPosition] = useState(null)
    var geojsonlayer = L.geoJson(cities);
    let setNearest = []
    // let nearest = leafletKnn(geojsonlayer).nearest(L.latLng(38,10),12);
    //             console.log(nearest)

    let nearestIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconSizecolor: 'rgba(255, 255, 255, 1)',
      // iconUrl: icon,
      shadowUrl: iconShadow,
      
  });

    const map = useMapEvents({
      click(e) {
        setNearestt(leafletKnn(geojsonlayer).nearest(L.latLng(e.latlng),12))
      //  setNear(setNearestt)
        // map.locate()
       },
      
      // locationfound(e) {   
      //   // setPosition(e.latlng)
      //   // map.flyTo(e.latlng, map.getZoom())
      // },    
  
    })
    console.log(nearestt)

    // return(

    // <div>    
    //  {nearestt.map((near,idx) =>
    //   <Marker position={[near.lon,near.lat]} 
    //    icon={nearestIcon}
    //    key={idx}>
    //     <Popup>You are here</Popup>
    //   </Marker>)}    
    //   </div>
    //   )
    
  }