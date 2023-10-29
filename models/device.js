import mongoose from "mongoose";
const DeviceSchema = new mongoose.Schema({

    
    device_id:{
        type:String,
        unique:true,
    },
    device_name:{
        type:String,
        unique:true,
    },
    alloted_to_user:{
        type:String,
    },
    state:{
        light:{
            type:Boolean,
        },
        fan : {
            type:Boolean,
        },
        mis : {
            type:Boolean,
        }    
    }
});

export default mongoose.model("Device", DeviceSchema)