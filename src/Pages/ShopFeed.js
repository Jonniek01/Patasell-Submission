import React from 'react'
import { Container } from 'react-bootstrap'
import { getUser, getUsers }  from '../data/Users'
import {Product,sId} from '../components/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'


import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../sass/shopFeed.scss'

import { useState, useEffect } from 'react'


export function ShopFeed({clat,clong}) {

  const [sellers,setSellers]=useState([]);
  const [loading, setLoading] = useState(true);
  const [search,setSearch]=useState('')
  const [searchs,setSearchS]=useState('')





 function handleSearch(e){
  setSearch(e.target.value)


  if (e.key === 'Enter'||e.keyCode===13) {

  setSearchS(search)
  return searchs;


  




}
  }


useEffect(async ()=>{
  const sellers = await getUsers();
  setSellers(sellers)
  setLoading(false)
},[])

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  d=parseFloat(d);
  return d.toFixed(3);
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

  const User = JSON.parse(localStorage.getItem('_user'));

  
const FeedCard=sellers.map((seller)=>{

 if(seller.fixedLatitude){
   let lat1=parseFloat(seller.fixedLatitude);
   let  lon1= parseFloat(seller.fixedLongitude);
   let lat2=Number(clat );
   let lon2=Number(clong );
 


 return (<div key={seller.id} className="feed-card">
   <div className='feedcard-header'>
   <span className='brand'>{seller.username}</span>
   <span className='distance' style={{color:"green"}}> {distance(lat1,lon1,lat2,lon2)} km</span>
   <span className='location-name'>{seller.location}<FontAwesomeIcon className='search-icon'  icon={faLocation}  /></span>


   </div>

   <Product sellerId={seller.id} search={searchs} />

   
   </div>)
 }
});


  return (
    <>
    <Container>
      <div className='search-container'>
      <div className='search'>
      <FontAwesomeIcon className='search-icon'  icon={faSearch}  />
      <input className='search-input' onKeyUp={handleSearch} placeholder='Search...' type="text"></input>

        
      </div>
      

      </div>
      <div className='searchcover'></div>

      <div className='feed-div'>

      <div className='feed-container'>
        
      {loading?'loading...':FeedCard}



      </div>
      </div>


      

    </Container>
    
    
    </>
  )
}

