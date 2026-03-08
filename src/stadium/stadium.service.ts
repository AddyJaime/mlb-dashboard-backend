import { League } from "@prisma/client";
import {prisma} from "../config/prisma";


// CONSULTAS 

export const findAllStadiums = async (league?: League) => {

  if(league){
    return await prisma.stadium.findMany({
      where:{league: league},
  
    })
  }
  return await prisma.stadium.findMany();
};

export const findStadiumById = async (id: number)=> {
  return await prisma.stadium.findUnique({
    where: {
      id: id
    }
  })
}
