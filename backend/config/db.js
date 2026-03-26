import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dhruvpadodara4_db_user:moviebook111@cluster0.c73ycoo.mongodb.net/MovieBook')
        .then(() => console.log('DB CONNECTED'))
}