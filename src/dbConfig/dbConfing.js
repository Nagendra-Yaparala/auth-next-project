import mongoose from "mongoose";

export async function connect (){
    try{
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log("MongoDB connected Successfully");
        });
        connection.on("error",(error)=>{
            console.log("MongoDb connection error please make sure mongodb is running"+error);
            process.exit();
        })

    }catch(error){
        console.log("Something goes wrong!!");
        console.log(error);
    }
}