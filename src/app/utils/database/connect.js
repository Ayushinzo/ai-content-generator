import mongoose from 'mongoose'

// 'mongodb+srv://ayushshembekar07:UdigH23XPGdq4Z3j@foodlist.iybfs.mongodb.net/mytool?retryWrites=true&w=majority&appName=foodList'

async function connectDB(){
    try{
       await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL).then(()=>{
            console.log("Connected to database...")
       })
       .catch((err)=>{
            console.log("Error occured: " + err.message)
       })
    }
    catch(err){
        console.log(err.message)
    }
}

export default connectDB;