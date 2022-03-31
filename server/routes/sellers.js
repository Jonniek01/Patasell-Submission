const {addUser,getUser, getUsers,updateUser, deleteUser} =require('../controllers/UserController');

const express = require('express');
const router = express.Router();
let id,message;

/**GET */
router.get('/', async (req,res)=>{
    message = await getUsers();
    res.json(message);
})
router.get('/:id', async (req,res)=>{
    const { id } = req.params;
    message = await getUser(id);
    res.json(message);
})

/**POST */
router.post('/', async (req,res)=>{
    message = await addUser(req.body);
    res.json(message);
})
/**PUT */
router.put('/:id', async (req, res)=>{
    id=req.params.id;
    message = await updateUser(id,req.body);
    res.json(message);
})
/**DELETE */
router.delete('/:id', async (req,res)=>{
    id=req.params.id;
    message = await deleteUser(id);
    res.json(message);
})



module.exports=router;