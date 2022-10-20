import mongoose from "mongoose";

const connectToMongo = async() =>{
    const res = await mongoose.connect('mongodb://localhost:27017/Ad-Gallery-app');

    if(res){
        console.log('connected succesfully');
    }
}

export default connectToMongo;