import express from "express";
import {allocateDevice, countunallocated, createDevice,updateDevice,getDevices,unallocatedDevice, getADevice} from "../controllers/Device.js"

const router = express.Router();

router.post("/", createDevice);
router.get("/:id", getADevice);
router.get("/undevice",countunallocated);
router.get("/getalldevice/devices",getDevices);
router.put("/updateDevice",updateDevice);
router.get("/unallocatedDevice/:userId",unallocatedDevice);
router.post("/allocateDevice",allocateDevice);


export default router;