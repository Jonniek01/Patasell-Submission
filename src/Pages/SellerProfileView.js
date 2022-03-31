import React from 'react'
import { Container } from 'react-bootstrap'


import '../sass/MyProfileSeller.scss'
import '../sass/SellerProfileView.scss'
import SellerProducts from '../components/SellerProduct'
import { getUser }  from '../data/Users'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {sId} from '../components/Product'




function SellerProfileView() {
  let id=sId()
  const [seller, setSeller]=useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(async ()=>{
    const sellerget = await getUser(id);
    console.log("id of seller being enquired:",id)
    console.log("seller being enquired :",sellerget)


    setSeller(sellerget)

    setLoading(false)
  },[])


  if(loading===true){
    return(<h1>Loading seller profile....</h1>)
  }
  else{

  
  return (
    <Container>
      <div className='seller-profile'>
          <Link className='back-search' to="/"><button >
 Back to Searches
 </button>
</Link>

    <div className='seller-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='contents'>
          <div className='s-brand'><h1>{seller.username}</h1></div>
          <div className='s-distance-name'><div className='s-name'>{seller.location}<FontAwesomeIcon className='search-icon'  icon={faLocation}  /></div><div className='s-distance'>30km</div></div>
          <div className='description'>
            <h5>Description</h5>
            <p>{seller.description}</p>
            
</div>
<div className='go'>
  <a href={`https://www.google.com/maps/@${seller.fixedLatitude},${seller.fixedLongitude},15z`} target="_blank">Go to location</a>

</div>
            
        </div>


    </div>
    <div className='seller-contact'>
      <div>
        <a href={`tel:${seller.phone}`}>Call:{seller.phone}</a>
      </div>
      <div>
        <a href={`https://wa.me/${seller.phone}/?text=Hello`}>WhatsApp</a>
        </div>
      </div>
    <div >
      <SellerProducts sellerId={id}/>
    </div>
    </div>

</Container>  )
  }

}

export default SellerProfileView