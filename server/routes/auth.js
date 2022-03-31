const {login} =require('../controllers/UserController');

const express = require('express');
const router = express.Router();
let message;


router.post('/signin', async (req, res)=>{
    const {email,password} = req.body
    message = await login(email, password);
    res.json(message);
})

module.exports=router;