const express=require('express')
const path=require('path')

const app = express()

app.use('/test',(req,res)=>{
    console.log("/test request called");
    res.send('Welcome to GeeksforGeeks');
})
const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`Server started port ${PORT}`))