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
    username: {
        type:String,
        required:true
    },
    profilepic: {
        type:String,
        required:false
    }
})

const User = mongoose.model("users", userSchema)

export default User;