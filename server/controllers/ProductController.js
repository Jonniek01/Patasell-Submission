const {
    collection, doc, setDoc, addDoc, getDocs, query, where, documentId, updateDoc,deleteDoc
    } = require('firebase/firestore');
const { getUser } = require('./UserController');
const {app,db, auth} = require('../firebase/config');
const collectionName="products";
const itemName="Product";


    /**Create */
    async function addProduct(data){
        const newProductRef = doc(collection(db, collectionName));

        await setDoc(newProductRef, data);
        return {
            success:1,
            message:`${itemName} added successfully`
        }
    }
    /**Read */
    //all products
    async function getProducts(){
        let data = [];
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            data.push({
                id:doc.id,
                ...doc.data()
                })
        });
    
        return data;
    }

    //single product
    async function getProduct(id){
        let data={};
        const q = query(collection(db, "products"), where(documentId(), "==", id));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data={
                id:doc.id,
                ...doc.data()
                }
        });

        return data;
    }
    /**Update */
    async function updateProduct(id,data){
        const productRef = doc(db, collectionName, id);

        await updateDoc(productRef,data);
         data = await getProduct(id);
        return {
            success:1,
            message:`${itemName} information updated successfully`,
            data
        }
    }
    /**Delete */
    async function deleteProduct(id){
        await deleteDoc(doc(db, collectionName,id));
        
        return {
            success:1,
            message:`${itemName} deleted successfully`
        }
    }


/**Collectionn based routes */
async function getUserProduct(userId, productId){
    let data = [];
    const q = query(collection(db, 'products'), where(documentId(), '==', productId), where('userId', '==', userId))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc=>{
        data.push({
            id: doc.id,
            ...doc.data()
        })
    })
    return data
}
async function getUserProducts(userId){
    let data = [];
        const q = query(collection(db, "products"), where("userId", "==", userId));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({
                id:doc.id,
                ...doc.data()
                })
        });

        return data;
}

async function getProductUser(productId){
    const {userId} = await getProduct(productId);
    let data = await getUser(userId)
    return data;
}
module.exports={
    addProduct, getProduct, getProducts,updateProduct,deleteProduct, getUserProducts,getUserProduct,getProductUser
}