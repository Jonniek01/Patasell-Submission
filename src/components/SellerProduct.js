import React from 'react'
import { getUserProducts}   from '../data/Products'
import '../sass/Product.scss'
import { useState,useEffect } from 'react'
import '../sass/MyProfileSeller.scss'

import '../sass/SellerProfileView.scss'


function SellerProducts({sellerId,search}) {
          const [loading, setLoading] = useState(true);
          const [productz,setProducts]=useState([])

        useEffect(async ()=>{
         const products = await getUserProducts(sellerId);
          setProducts(products)

                if(products) {setLoading(false)}


          return products
          
          
        },[])

        function mappedProducts(){
          return productz.map(
          (product)=>{
            return(

              <div  className='product-card' key={product.id}>
              <div className='name-image'>
                  <div className='product-name'>{product.productName}</div>
                  <div className='product-image'>Image</div>
              </div>
              <div className='price-available'>
                  <div className='price'><p>Ksh: {product.price}</p></div>
              </div>
          </div>
      

      )
    }

        )
  }





        if(loading===true){

          return(<div>Loading</div>)


        }

        else{





  return (
    <div className='seller-product-cards'>
          {mappedProducts()}


    </div>
  )}

}


export default SellerProducts



