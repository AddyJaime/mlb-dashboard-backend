import { Router } from "express";
import { getAllStadiums, getStadiumById } from "./stadium.controller";

const router = Router();

router.get("/", getAllStadiums);
router.get("/:id", getStadiumById)

export default router;