import User from "../models/user.js";
import {createError} from "../utilis/error.js";

export const createUser= async (req, res, next) => {
    const newUser = new User({
        ...req.body,
        used_device:[],
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      next(err);
    }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    if (req.body.password!=user.password)
      return next(createError(400, "Wrong password or username!"));

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};