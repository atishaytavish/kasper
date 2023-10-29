import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        unique:true,
    },
    password :{
        type:String,
        required:true,
    },
    user_id :{
        type:String,
        required:true,
        unique:true,
    },
    used_device :{
        type:[{type: String}],
    }
});

export default mongoose.model("User", UserSchema)