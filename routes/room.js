import express from "express";
import {createRoom, deviceunallocated, getRooms} from "../controllers/Room.js";
const router = express.Router();

router.post("/:id", createRoom);
router.post("/deviceUnallocated",deviceunallocated);
router.get("/getRooms/:id", getRooms);
// router.get("/:id",deviceunallocated);

export default router;