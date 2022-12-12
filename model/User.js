import mongoose from "mongoose";

var UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    key:{
        type: String,
        null: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

var User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User