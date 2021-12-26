const connectToMongo=require('./db')
connectToMongo();
const express = require('express')
const app = express()
app.use(express.json())
app.use('/api/auth',require('./Routes/auth'));
// app.use('/api/notes',require('./Routes/notes'));
app.listen(3000,()=>{
    console.log(`http://localhost:3000`);
})