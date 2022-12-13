import mongoose from 'mongoose'

const dbConnect = async() => {
   return await mongoose.connect(process.env.MONGO_URI)
}

export default dbConnect