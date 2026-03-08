import { Request, Response } from "express";
import { findAllStadiums, findStadiumById } from "./stadium.service";
import { League } from "@prisma/client";

export const getAllStadiums = async(req:Request, res:Response) => {
  try {

  let {league} = req.query;

  if(league){
    league = (league as League).toUpperCase();
  }

  const stadiums = await findAllStadiums(league as League);

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

export const getStadiumById = async (req:Request, res:Response) => {
  try {
    let id = Number(req.params.id);
    const stadium = await findStadiumById(id);
    res.status(200).json({
    success: true,
    data: stadium,
    })
  } catch (error) {
    res.status(500).json({
    success: false,
    message: "Could not find the stadium or internal error occur"
    })
  }
}

