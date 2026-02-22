import { User } from "../models/schema.js"

export const signUp = async (req,res) => {
 try {
    const {name,email,password,userName} = req.body

    if(!name,email,password,userName) {
      return res.status(400).json({message: "Send All Details required"})
    }

    let existUser = await User.findOne({email})
    if(existUser) {
        return res.status(400).json({message: "user Already Exist"})
    }

    const hassedPassword = await bcrypt.hash(password,8)

    const user = await User.create({
      name,
      email,
      password:hassedPassword,
      userName
    })

    return res.status(201).json({user: {
      name,
      email,
      password,
      userName
    }})
 } catch (error) {
    return res.status(500).json({message: "Server Error"})
 }   
}