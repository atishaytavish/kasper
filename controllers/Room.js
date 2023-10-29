import Room from "../models/room.js";
import User from "../models/user.js";

export const createRoom = async (req, res, next) => {
  const newRoom = new Room({
    ...req.body,
    user_id:req.params.id
  });

  try {
    console.log(newRoom)
    const savedRoom = await newRoom.save();

    try {
      const user = await User.findOneAndUpdate({user_id:req.params.id}, {
        $push: { used_device: req.body.device_id }},
        {new: true}
        );
        return res.status(200).json(user);
    } catch (err) {
      next(err);
    }

    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const deviceunallocated = async (req, res, next) => {
  const newRoom = new Room({
      ...req.body,
      user_id:req.params.id,
  });

  try {
    
  } catch (err) {
    next(err);
  }
};

export const getRooms = async (req, res, next) => {
  try{
    const devices = await Room.find({user_id: req.params.id}).exec();
    res.status(200).send(devices);
  }catch(err){
    next(err);
  }
}