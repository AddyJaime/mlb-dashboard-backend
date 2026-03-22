import { Router } from "express";
import { getAllStadiums, getStadiumById, getStadiumsToCompare } from "./stadium.controller";

const router = Router();

router.get("/compare", getStadiumsToCompare )
router.get("/", getAllStadiums);
router.get("/:id", getStadiumById)

export default router;