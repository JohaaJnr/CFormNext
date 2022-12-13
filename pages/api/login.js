import User from "../../model/User"
import bcrypt from 'bcrypt'
import dbConnect from "../../utils/db"

const jwt = require('jsonwebtoken')


export default async function Login(req,res){
    try{
        dbConnect()
        const { method } = req
        if(method === 'POST'){
            const formData = req.body
          
            const user = await User.findOne({ email: formData.email })
            if(!user){
                res.json({
                    error: 'User not found. Create an account first'
                })
            }else{
                await bcrypt.compare(formData.password, user.password, (err,result)=>{
                    if(err) throw err
                    if(result){
                        const signedUser =  jwt.sign({user}, 'shhhh')
                        
                        res.status(201).json({
                            success: 'Login Successfull',
                            user: signedUser
                        })
                        
                    }else{
                        res.json({
                            error: 'Invalid Credentials'
                        })
                    }
                })
            }
        }else{
            res.status(503).send('Requested method not allowed')
        }

    }catch(error){
        res.status(504).json({
            error: error
        })
    }
}