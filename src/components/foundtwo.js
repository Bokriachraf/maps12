import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup,useMapEvents} from 'react-leaflet';
import cities from './cities.json';
import leafletKnn from 'leaflet-knn';
// import GeometryUtil from "leaflet-geometryutil";
import * as GeometryUtil from "leaflet-geometryutil";


import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';



export const LocationMarker=()=> {

    const [nearestt, setNearestt] = useState()
    const [position, setPosition] = useState(null)
    var geojsonlayer = L.geoJson(cities);

    let nearestIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconSize: 15,
         shadowUrl: iconShadow,
      
  });
  const [map, setMap] = useState(null);

    useMapEvents({
      click(e) {
        console.log(GeometryUtil.closest(map, cities, [36,10]))
        // console.log (L.GeometryUtil.closestLayer(map, geojsonlayer.getLayers(), e.latlng));

        // setNearestt(leafletKnn(geojsonlayer).nearest(L.latLng(e.latlng)))
        // setPosition(e.latlng) ;  
      },
     })
    // console.log(position,nearestt)

    // useEffect(() => {
    
    //   return () => {
      
    //   }
    // }, [nearestt,nearestIcon])
    

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