import { User } from "../models/schema.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../config/token.js"

export const signUp = async (req,res) => {
 try {
  // User Kee Post Receive Kee
    const {name,email,password,userName} = req.body

    //Agar isme koi ek bhee value missing hai to error return Kare

    if(!name || !email || !password || !userName) {
      return res.status(400).json({message: "Send All Details required"})
    }

    //Email Pehle se Mojood Hai DataBase me to User Already exist Message Return Kare

    let existUser = await User.findOne({email})
    if(existUser) {
        return res.status(400).json({message: "user Already Exist"})
    }
    
    // Password Hash for Security Based Ke Liye 

    const hassedPassword = await bcrypt.hash(password,8)

    // User Create for Schema Based 
    // Password ke Liye Hashed Password

    const user = await User.create({
      name,
      email,
      password:hassedPassword,
      userName
    })

    let token = generateToken(user._id)

    res.cookie("token", token, {
        httpOnly:true,
        samesite: "strict",
        maxAge: 7*60*60*1000
    })

    // Return me User ka Data Send

    return res.status(201).json({user: {
      name,
      email,
      userName
    }})
 } catch (error) {
  console.log(error);
    return res.status(500).json({message: "Server Error"})
 }   
}

// const login = async (req,res) => {
//     const existUser = await User.findOne({email})
//     (!existUser) {
//         return res.status()
//     }
// }