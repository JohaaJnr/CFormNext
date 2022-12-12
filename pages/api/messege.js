import Messeges from "../../model/Messeges"
import User from '../../model/User'

export default async function Messege(req, res){
    try{
        const { method } = req
        if(method === 'POST'){
            
            const formData = req.body
            if(!formData.email || !formData.name || !formData.messege){
                res.json({
                    msg: 'Request data incomplete'
                })
            }else{
                const user = await User.find({ key: formData.id })
                if(user.length == 0){
                    res.json({
                        msg: 'Invalid Request'
                    })
                }else{
                    Messeges.create({
                        user: user[0].email,
                        sender_email: formData.email,
                        sender_name: formData.name,
                        messege: formData.messege
                    })
                    res.json({
                        status: 'Feedback has been sent.'
                    })
                }
            }
       
        }else{
            res.json({
                msg: 'Requested Method not allowed'
            })
        }
    }catch(error){
        res.json({
            error: error
        })
    }
}