import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup,useMapEvents} from 'react-leaflet';
import cities from './cities';
import leafletKnn from 'leaflet-knn';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { pClosest } from './closestFunction';




export const LocationMarker=()=> {

    const [nearestt, setNearestt] = useState()
    const [position, setPosition] = useState(null)
    var geojsonlayer = L.geoJson(cities);

    let nearestIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconSize: 15,
         shadowUrl: iconShadow,
      
  });
  let nea=[];

    useMapEvents({
      
      click(e) {
        // console.log(pClosest(20,e.latlng))
        setNearestt(leafletKnn(geojsonlayer).nearest(L.latLng(e.latlng),22))
        setPosition(e.latlng) ;  
      },
     })
    console.log(position,nearestt)

       

    return(
<div>
{ nearestt == null ? null : 
     nearestt.map((near,idx) =>
      <Marker position={[near.lon,near.lat]} 
       icon={nearestIcon}
       key={idx}>
        <Popup>You are here</Popup>
      </Marker>)}    
      </div>
      
      )
    
  }