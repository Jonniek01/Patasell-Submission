const {
collection, doc, setDoc, addDoc, getDocs, query, where, updateDoc,deleteDoc, documentId
} = require('firebase/firestore');
const {app,db, auth} = require('../firebase/config');

const collectionName="images";
const itemName="Image";

    /**Create */
    async function addImage(data){
        const newImageRef = doc(collection(db, collectionName));

        await setDoc(newImageRef, data);
        return {
            success:1,
            message:`${itemName} added successfully`
        }
    }
    /**Read */
    async function getImages(param=null){
        let data = [];
        if(param != null && typeof param == 'object'){
            const q = query(collection(db, collectionName), where(documentId(), "==", param.id) ,where("type", "==",param.type));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data.push({
                    id:doc.id,
                    ...doc.data()
                    })
            });

            return data;
        }
        
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
            data.push({
                id:doc.id,
                ...doc.data()
                })
        });
    
        return data;
    }

    //single image
    async function getImage(id){
        let data={};
        const q = query(collection(db, collectionName), where(documentId(), "==", id));

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
    async function updateImage(id,data){
        const ImageRef = doc(db, collectionName, id);

        await updateDoc(ImageRef,data);

        return {
            success:1,
            message:`${itemName} information updated successfully`
        }
    }
    /**Delete */
    async function deleteImage(id){
        await deleteDoc(doc(db, collectionName,id));
        
        return {
            success:1,
            message:`${itemName} deleted successfully`
        }
    }



module.exports={
    addImage, getImage, getImages, updateImage, deleteImage
}