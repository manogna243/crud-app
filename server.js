const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json())
const model=require('./model')
app.post('/create',async(req,res)=>{
    try{
        const data=await model.create(req.body)
        res.status(200).json(data)
    }
    catch(error){
        res.status(200).json({
            msg:error.message})
    }
})



mongoose.connect("mongodb+srv://manu123:Manu21082003@cluster0.btdqd39.mongodb.net/Mann?retryWrites=true&w=majority")
.then(()=>{
    console.log("database coonected")
    app.listen(5000,()=>{

        console.log("I am listening")
    })
   
})
.catch((error)=>{
    console.log(error)
})