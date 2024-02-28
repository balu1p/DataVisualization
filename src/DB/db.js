import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Db is connected! host : ${connect.connection.host}`)
    } catch (error) {
        console.log("Db not connected", error);
    }
}

export {connectDb}