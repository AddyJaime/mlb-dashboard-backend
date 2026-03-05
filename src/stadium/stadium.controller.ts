import { Request, Response } from "express";
import { findAllStadiums } from "./stadium.service";

export const getAllStadiums = async(req:Request, res:Response) => {
  try {

    const stadiums = await findAllStadiums();

    res.status(200).json({
      success: true,
      data: stadiums,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "internal Server error",
    })
  }
}