import React from 'react'
import { getUserProducts}   from '../data/Products'
import '../sass/Product.scss'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

let id=""

export const Product=({sellerId,search})=> {
  console.log("your search:",search)


          const [loading, setLoading] = useState(true);
          const [productz,setProducts]=useState([])
          const [found,setFound]=useState(false)


        useEffect(async ()=>{
         const products = await getUserProducts(sellerId);
          setProducts(products)

                 if(products){setLoading(false)}


          return products
          
          
        },[])
        const SearchedCard=()=>{
          return productz.filter(product=>product.productName.toLowerCase().includes(search.toLowerCase())).map(
            (product)=>{
              return    <div  className='product-card'>
              <div className='name-image'>
                  <div className='product-name'>{product.productName}</div>
                  <div className='product-image'>Image</div>
              </div>
              <div className='price-available'>
                  <div className='price'><p>Ksh. {product.price}</p></div>
                  <Link  className='' to="/seller">
      
                  <button onClick={()=>{id=product.userId}}  className='enquire'>Enquire</button>
                  </Link>
              </div>
          </div>
      
            }
          )

        }





        if(loading===true){

          return(<div>Loading</div>)


        }

        else{
          if(productz[0]!=undefined){
            
          if(search===''){
            







  return (
    <div  className='product-card'>
        <div className='name-image'>
            <div className='product-name'>{productz[0].productName}</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>Ksh. {productz[0].price}</p></div>
            <Link  className='' to="/seller">

            <button onClick={()=>{id=productz[0].userId}}  className='enquire'>Enquire</button>
            </Link>
        </div>
    </div>
  )}
  else{
    if(SearchedCard===null){
      return(<div>{search} not found</div>)
    }
    else{

    return(<div>
            <SearchedCard/>


    </div>
    )
  }

  }
}
else{
  return<div>No products</div>
}
}

}

export const sId=()=> {
  return id
}



