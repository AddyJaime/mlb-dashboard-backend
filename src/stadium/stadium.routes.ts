import { Router } from "express";
import { getAllStadiums } from "./stadium.controller";

const router = Router();

router.get("/", getAllStadiums);

export default router;