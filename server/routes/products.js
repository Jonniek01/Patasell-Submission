const {addProduct,getProduct, getProductUser, getProducts, updateProduct, deleteProduct} = require('../controllers/ProductController');
const { getUser } = require('../controllers/UserController')
const express = require('express');
const router = express.Router();
const sellerRouter = express.Router({mergeParams:true})
let id,message;
/**My middlewares */
router.use('/:id/seller', sellerRouter);
router.use('/:id/sellers', require('./users'));

/**GET */
router.get('/', async (req,res)=>{
    message = await getProducts();
    res.json(message);
})
router.get('/:id', async (req,res)=>{
    const { id } = req.params;
    message = await getProduct(id);
    res.json(message);
})

/**POST */
router.post('/', async (req,res)=>{
    message = await addProduct(req.body);
    res.json(message);
})
/**PUT */
router.put('/:id', async (req, res)=>{
    id=req.params.id;
    message = await updateProduct(id,req.body);
    res.json(message);
})
/**DELETE */
router.delete('/:id', async (req,res)=>{
    id=req.params.id;
    message = await deleteProduct(id);
    res.json(message);
})

/**Handling my middlewares */

sellerRouter.get('/',async (req, res)=>{
    const productId = req.params.id
    message = await getProductUser(productId)
    res.send(message)
})

module.exports=router;