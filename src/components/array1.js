import React, {useState} from 'react';
import cities from './cities';
import {MapContainer, Marker, Popup,useMapEvents} from 'react-leaflet';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const myarray=[[10,10]]
const myclose=[]

export const Array2d =()=>{ 
    // const [nearestt, setNearestt] = useState()
    const [positions, setPositions] = useState(null);


    cities.map( (city,idx) => myarray.push(city.geometry.coordinates))

    let nearestIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        iconSize: 15,
           shadowUrl: iconShadow,
        
    });

    function closest(pts,k,pt) {
        let n = pts.length;
        let distance = new Array(n);
        let close = [];
    
        for(let i = 0; i < n; i++)
        {
            let x = pts[i][0]-pt[0][0], y = pts[i][1]-pt[0][1];
            distance[i] = (x * x) + (y * y);
        }
    
        distance.sort(function(a,b){return a-b;});
        
        // Find the k-th distance
        let distk = distance[k - 1];
    
        // Print all distances which are
        // smaller than k-th distance
        for(let i = 0; i < n; i++)
        {
            let x = pts[i][0]-pt[0][0], y = pts[i][1]-pt[0][1];
            let dist = (x * x) + (y * y);
            
            if (dist <= distk)
            close.push([pts[i][0],pts[i][1]])
       }
      return(close)

    }
    myclose.push(closest(myarray,10,[[6, 1]]))
    
      const HandleClickMap = () => {
        const map = useMapEvents({
          click(e) {
             setPositions(e.latlng)
             myclose.push(closest(myarray,10,e.latlng))
        },
    })
    return null;
    }  
    console.log(myclose)
    console.log(myclose[0][1][0])


    // setNearestt(closest(myarray,10,[[6, -2]]))
    //  return console.log(closest(myarray,10,[[6, -2]]))
//    return  myclose.push(closest(myarray,10,[[6, -2]]))
    // console.log(myclose)
        // var geojsonlayer = L.geoJson(myclose);
        // console.log(geojsonlayer)
return (<div>
 {   (myclose[0])== null ? null : 
    (myclose[0]).map((near,idx) =>
    <Marker position={[myclose[0][idx][0],myclose[0][idx][1]]} 

      icon={nearestIcon}
       key={idx}>
   
        <Popup>You are here</Popup>
      </Marker>)}
         </div>)

}
// console.log(closest(myarray,10,[[6, -2]]))
