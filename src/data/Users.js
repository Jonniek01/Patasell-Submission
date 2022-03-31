/*eslint-disable */
import axios from '../axios';
export async function getUsers(){
   const {data} = await axios.get(`users`);
   return data;
}

export async function getUser(userId){
   const {data} = await axios.get(`users/${userId}`);
   return data;
}
