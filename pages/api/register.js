import dbConnect from "../../utils/db";
import User from "../../model/User";
import bcrypt from 'bcrypt';

export default async function Register(req,res){
    try{

        
        const { method } = req
        if(method === 'POST'){
            const formData = req.body
            if(!formData){
                res.status(404).json({ msg: 'Formdata not provided...'})
            }else{
                const pass = (await bcrypt.hash(formData.password, 5)).toString()
                dbConnect()
               const user = await User.findOne({ $or: [{email: formData.email},{username: formData.username}]})
               if(!user){
                User.create({
                    username: formData.username,
                    email: formData.email,
                    password: pass
                })
                res.json({
                    success: 'New User Created...'
                })
               }else{
                res.status(203).json({
                    msg: 'Username/email Already Exists'
                })
               }
               
            }
        }else{
            res.status(405).json({ msg: 'Requested method not allowed...'})
        }

    }catch(error){
        res.status(404).json({
            msg: error
        })
    }
}