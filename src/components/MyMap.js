import React, {useState} from 'react';
import L from 'leaflet';
import cities from './cities.json';
import leafletKnn from 'leaflet-knn';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import {MapContainer,TileLayer,Marker, Popup,useMapEvents} from 'react-leaflet';
import { LocationMarker } from './closestOnclick';
import  {Array2d}  from './arraySpread.js';
// import { Closest } from './foundfor';




let nearestIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    
    // iconUrl: icon,
    shadowUrl: iconShadow,
    
});
// L.Marker.prototype.options.icon = DefaultIcon;
let DefaultIcon = L.icon({
    // iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize:13,
    iconUrl: icon,
    // shadowUrl: iconShadow,
    
});

function getIcon (_iconsize){
    return L.icon({
        iconUrl: require ("../static/icons/marker.png"),
        iconSize:[_iconsize]
    })
}

// var geojsonlayer = L.geoJson(cities);

//   let nearest = leafletKnn(geojsonlayer).nearest(L.latLng(36.85, 10.16),3);
//   console.log(nearest);
//   nearest.layer.bindPopup("I'm nearest to where you clicked!").openPopup();

  
const MyMap = ()=> {    
    const position = [36.75,10.23]
    const [positions, setPositions] = useState(null);

    // const HandleClickMap = () => {
    //     const map = useMapEvents({
    //       click(e) {
    //         setPositions(e.latlng)
    //         console.log(e)
    //         alert('bonjour');
    //         map.locate()
    //       },
    //     })
    //     return null;
    //     }

    
    const HandlePositions = () => {
         useMapEvents({
          click(e) {
             setPositions(e.latlng)
            
        },
    })
    return null;
    }  


//     nearest.map( (near,idx) =>
//     <Marker 
//     position={[near.lon,near.lat]} 
//     icon={nearestIcon}
//     key={idx}
//     >
//     <Popup>
//         <p>i'm </p>
//     </Popup>
//    </Marker>)
            // setPositions(e.latlng)
            // console.log(e)
            // alert('bonjour');
            // map.locate()
        
        //   locationfound(e) {
        //     setPositions(e.latlng)
        //     map.flyTo(e.latlng, map.getZoom())
        //   },
       
    
var geojsonlayer = L.geoJson(cities);

// let nearest = leafletKnn(geojsonlayer).nearest(L.latLng(38,10),12);
//             console.log(nearest)

    return(
        <div style={{display:'flex'}}>
       
        <MapContainer className='map'
        center={position}
        zoom={14.3}
        style={{height:700,width:1000}}
        >
        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        {/* <Marker position={position} icon={getIcon(20)}>

        </Marker>   */}

        {/* {cities.map( (city,idx) =>
         <Marker 
         position={[city.lat,city.lng]} 
         icon={getIcon(20)}
         key={idx}
         >
        </Marker>)} */}
        {cities.map( (city,idx) =>
         <Marker 
         position={[city.geometry.coordinates[0],city.geometry.coordinates[1]]} 
         icon={DefaultIcon}
         key={idx}
         >
        </Marker>)}
        <HandlePositions/>
        {/* <LocationMarker/> */}
        <Array2d/>
        {/* <Closest/> */}
        {/* {nearest.map( (near,idx) =>
    <Marker 
    position={[near.lon,near.lat]} 
    icon={DefaultIcon}
    key={idx}
    >
    <Popup>
        <p>i'm </p>
    </Popup>
   </Marker>)} */}

        </MapContainer>
         
        {positions == null 
            ? null
            : <>
             <p> Your Lat position : {positions.lat}
             <br></br><br></br>
                Your Lng position : {positions.lng}</p>
             </>
            }
        </div>
    )
}

export default MyMap;

