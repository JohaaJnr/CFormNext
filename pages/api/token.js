import User from '../../model/User'
import dbConnect from '../../utils/db'
import bcrypt from 'bcrypt'

export default function generateToken(req,res){
    try{
        dbConnect()
        var id = req.body.id
        
        bcrypt.hash('APIKey', 5 , (err,hash)=>{
            if(err) throw err
            User.findByIdAndUpdate(id, { key: hash }, (err,result)=>{
                if(err) throw err
                
            })
            res.json({
                token: hash
            })
           
        })
        
    }catch(error){
        res.json({
            error: error
        })
    }
}