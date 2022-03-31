const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.get('/', (req, res)=>{
    res.send("Hello there, welcome to Patasell server api. <.(._.).>...<.(._.).>...<.(._.).>");
})

app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/images', require('./routes/images'));

app.get('/auth/signup', async (req,res)=>{
    res.send('This route is currently under maintenance. Please check later');
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))