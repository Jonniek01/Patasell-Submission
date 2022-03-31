const { addImage, getImage, getImages,updateImage, deleteImage } = require('../controllers/ImageController');

const express = require('express');
const router = express.Router();
let id,message;
/**GET */
router.get('/', async (req,res)=>{
    message = await getImages();
    res.json(message);
})
router.get('/:id', async (req,res)=>{
    id = req.params.id;
    message = await getImage(id);
    res.json(message);
})
router.get('/:id/type/:type', async (req,res)=>{
    const { id, type } = req.params;
    message = await getImages({id,type});
    res.json(message)
})

/**POST */
router.post('/', async (req,res)=>{
    message = await addImage(req.body);
    res.json(message);
})
/**PUT */
router.put('/:id', async (req, res)=>{
    id=req.params.id;
    message = await updateImage(id,req.body);
    res.json(message);
})
/**DELETE */
router.delete('/:id', async (req,res)=>{
    id=req.params.id;
    message = await deleteImage(id);
    res.json(message);
})

module.exports=router;