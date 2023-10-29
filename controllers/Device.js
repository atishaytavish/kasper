import device from "../models/device.js";
import Device from "../models/device.js";
import user from "../models/user.js";

export const createDevice = async (req, res, next) => {
    const newDevice = new Device({
        ...req.body,
        alloted_to_user: null,
        state:{
            light:0,
            fan:0,
            mis:0,
        },
    });
    try {
      const savedDevice = await newDevice.save();
      res.status(200).json(savedDevice);
    } catch (err) {
      next(err);
    }
  };

  export const countunallocated = async (req, res, next) => {
    try {
      const deviceCount = await Device.countDocuments({ alloted_to_user: null });
      
  
      res.status(200).json([
        { type: "Unallocated_Device", count: deviceCount },
      ]);
    } catch (err) {
      next(err);
    }
  };

export const deviceState = async (req,res,next)=>{
  try{
    const Sdevice = await Device.find({device_id:req.device.id});
    res.status(200).json([{
      state:Sdevice.state},
    ]);
  } catch (err) {
    next(err);
  }
};


export const getDevices = async (req,res,next)=>{
  try{
    const nullUserIdDevices = await Device.find({ alloted_to_user:{$ne: null }}).exec();
    res.json(nullUserIdDevices);
  } catch (err) {
    next(err);
  }
}

export const getAllDevices = async (req,res,next)=>{
  try{
    const nullUserIdDevices = await Device.find({ alloted_to_user:req.params.id}).exec();
    res.json(nullUserIdDevices);
  } catch (err) {
    next(err);
  }
}


export const unallocatedDevice = async(req, res, next) => {
  const userId = req.params.userId;
  const unused = [];
  Device.find({ alloted_to_user: userId }).then((data) => {
    console.log(data);
    const allDevices = data;
    user.findOne({user_id: userId}).then((userData) => {
      // console.log(userData)
      const usedDevices = userData.used_device;
      console.log(usedDevices)

      for (let i = 0; i < allDevices.length; i++) {
        let u = false;

        for (let j = 0; j < usedDevices.length; j++) {
          if (usedDevices[j] === allDevices[i].device_id) {
            u = true;
            break;
          }
        }

        if (!u) {
          unused.push(allDevices[i]);
        }
      }

      return res.status(200).json({
        "message": "Success",
        "data": unused
      })
    }).catch(error => {
      next(error)
    })
  }).catch(err => {
    next(err)
  })
}

export const allocateDevice = async(req, res, next) => {
  const userId = req.body.user_id;
  const qty = req.body.qty;
  // const deviceName = req.body.deviceName;

  try {
    const availQty = await Device.count({ alloted_to_user: null })

    if (availQty < qty) {
      return res.status(400).json({
        "message": "error",
        "error": "Insufficent Devices"
      })
    }
console.log(availQty)
    for (let i = 0; i < qty; i++) {
      const changeDevice = await Device.updateOne({alloted_to_user: null}, {
        $set: {alloted_to_user: userId}
      })
    }

    return res.status(200).json({
      "message": "Success"
    })
  } catch (error) {
    next(error)
  }
}

export const updateDevice = async(req, res, next) => {
  const deviceId = req.body.deviceId;
  const applicationName = req.body.applicationName;
  const targetChange = req.body.targetChange;
  // const newState = req.body.newState;

  // const deviceStateData = await Device.findOne({ device_id: deviceId });

  // const deviceStatus = deviceStateData.state;

  Device.findOneAndUpdate({ device_id: deviceId }, {
    $set: {
      [`state.${applicationName}`]: targetChange,
    },
  }).then((data) => {
    return res.status(200).json({
      "message": "Success"
    })
  }).catch((error) => {
    return res.status(500).json({
      "message": "INTERNAL SERVER ERROR"
    })
  })
}

export const getADevice = async(req, res, next) => {
  try{
    const device = await Device.findOne({device_id: req.params.id});

    res.status(200).json(device);
  }catch(err){
    next(err);
  }
}