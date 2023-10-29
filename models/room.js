import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema({
    room_id:{
        type:String,
        unique:true,
    },
    user_id:{
        type:String,
    },
	device_id:{
        type:String,
        unique:true,
    },
	room_name:{
        type:String,
        unique:true,
    }
});

export default mongoose.model("Room", RoomSchema)