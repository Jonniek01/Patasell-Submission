/*eslint-disable */
import axios from 'axios';
export async function getProducts(){
   const {data} = await axios.get(`http://localhost:5000/products`);
   return data;
}

export async  function getUserProducts(sellerId) {
   const {data} = await axios.get(`${SERVER_URL}/users/${sellerId}/products`);
   return data;
 }

