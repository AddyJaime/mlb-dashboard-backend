import { Router } from "express";
import { getAllStadiums, getStadiumById, getStadiumsToCompare, getStadiumAttendance } from "./stadium.controller";

const router = Router();
// specific routes
router.get("/compare", getStadiumsToCompare )
router.get("/:id/attendance", getStadiumAttendance )

// dynamic routes
router.get("/:id", getStadiumById)

// general routes
router.get("/", getAllStadiums);
export default router;