// *SERVER
const express = require('express');
const path = require('path');
require('dotenv').config();

// Connect MongoDB
const connectDB=require('./config/db')
connectDB()

// const seedConnectDB=require('./seed/seeds')
// seedConnectDB()

const app = express();
//*MIDDLEWARE
//  replaced body parser
app.use(express.json({ extended: false }));


// *TEST ROUTE
// app.use('/test',(req,res)=>{
//     console.log("/test request called");
//     res.send('Welcome to GeeksforGeeks');
// })

// *CONTACT ROUTE
app.use('/api/contacts', require('./routes/contact'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
