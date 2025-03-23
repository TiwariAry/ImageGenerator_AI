import mongoose from 'mongoose'

export const connectDB = (url) => {
    return mongoose.connect(url)
        .then(() => console.log("Connected to Database"))
        .catch((error) => console.log(error))
}