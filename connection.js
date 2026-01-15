//import mongoose
const mongoose=require("mongoose")

const connectionString=process.env.DATABASE

//connection
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Connected Successfully");
    
}).catch((err)=>{
    console.log(`Connection Failed due to ${err}`);
    
})