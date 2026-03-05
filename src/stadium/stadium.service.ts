import {prisma} from "../config/prisma";

export const findAllStadiums = async () => {
  return await prisma.stadium.findMany();
};


