import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true
    },
    userName: {
        type:String,
        required:true
    },
    profilePic: {
        type:String,
        required:false
    }
})

export const User = mongoose.model("users", userSchema)