import mongoose from "mongoose";

const MessegeSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    sender_email: {
        type: String,
        required: true
    },
    sender_name: {
        type: String,
        required: true
    },
    messege : {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Messege = mongoose.models.Messege || mongoose.model('Messege', MessegeSchema)

export default Messege