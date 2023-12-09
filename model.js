const mongoose=require('mongoose')
const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"pleae enter the name"]
    },
    age:{
        type:Number,
        required:[true,"please enter the age"]
    },
    networth:{
        type:Number,
        required:[true,"please enter networth"]
    }
})
const details=mongoose.model('Details',detailsSchema)
module.exports=details