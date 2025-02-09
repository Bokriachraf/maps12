import React, {useState} from 'react';
import cities from './cities';
import {MapContainer, Marker, Popup,useMapEvents} from 'react-leaflet';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const jdid=[]

export  const Array2d =()=>{ 

  const myarray=[]
    const [fin, setFin] = useState()
    const [positions, setPositions] = useState();
    let meclose=[]



    cities.map( (city,idx) => myarray.push(city.geometry.coordinates))

    let nearestIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        iconSize: 15,
          //  shadowUrl: iconShadow,
        
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

      const HandleClickMap = () => {
        
        const map = useMapEvents({
               click(e) {
                const myclose=[]
                setPositions(e.latlng)
                myclose.push([e.latlng.lat,e.latlng.lng])
                setFin(closest(myarray,20,myclose))      
         },
        
    })
    return(<div>

 {   (fin)== null ? null : 
               fin.map((near,idx) =>
               <Marker position={[near[0],near[1]]} 
           
                 icon={nearestIcon}
                  key={idx}>
              
                   <Popup>You are here</Popup>
                 </Marker>)}
    </div>
    
    )
    // console.log(fin)

    }  
 


        return (<div>

<HandleClickMap/>

                
 {/* {   (fin)== null ? null : 
               fin.map((near,idx) =>
               <Marker position={[near[0],near[1]]} 
           
                 icon={nearestIcon}
                  key={idx}>
              
                   <Popup>You are here</Popup>
                 </Marker>)} */}
          
                    
           
            

            </div>)
 }
