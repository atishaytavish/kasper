import express from "express";
import {allocateDevice, countunallocated, createDevice,updateDevice,getDevices,unallocatedDevice, getADevice, getAllDevices} from "../controllers/Device.js"

const router = express.Router();

router.post("/", createDevice);
router.get("/:id", getADevice);
router.get("/undevice",countunallocated);
router.get("/getalldevice/devices",getDevices);
router.put("/updateDevice",updateDevice);
router.get("/unallocatedDevice/:userId",unallocatedDevice);
router.post("/allocateDevice",allocateDevice);
router.get("/getalldevice/:id",getAllDevices);


export default router;