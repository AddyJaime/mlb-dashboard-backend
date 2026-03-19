import { Request, Response } from "express";
import { findAllStadiums, findStadiumById } from "./stadium.service";
import { League } from "@prisma/client";
import { StadiumFilters } from "../types/stadium.types";




export const getAllStadiums = async(req:Request, res:Response) => {
  try {

console.log("Req Query:", req.query)
// DEBUG: muestra en consola lo que el cliente envió en la URL
// ejemplo: /api/stadiums?state=NY → { state: "NY" }

// aqui el controller recibe los datos que manda el cliente
// desde Postman, navegador o frontend
  let {league, state, capacity} = req.query;

  let filters: StadiumFilters = {}
// objeto vacío donde se guardarán los filtros para la base de datos
// se llena dependiendo de lo que envíe el cliente

  if(league){
    filters.league = (league as League).toUpperCase() as League;
  }
// si el cliente envía league, se agrega al objeto filters
// toLowerCase() se usa para evitar problemas de mayúsculas

  if(state){
    filters.state = (state as string).toUpperCase();
  }


if(capacity){
  // req.query siempre viene como un string por esa razon hay que cambiar capacity a un numero
    filters.capacity = (capacity as string).toUpperCase();
}



  // aqui el controller llama al service
  // el service es quien consulta la base de datos
  const stadiums = await findAllStadiums(filters);

  // aqui el controller envía la respuesta al cliente
  // Express convierte esto en JSON automáticamente
    res.status(200).json({
      success: true,
      data: stadiums,
    });

  } catch (error) {
    // si algo falla se devuelve error al cliente
    res.status(500).json({
      sucess: false,
      message: "internal Server error",
    })
  }
}

export const getStadiumById = async (req:Request, res:Response) => {
  try {

    let id = Number(req.params.id);
// obtiene el id desde la URL
// ejemplo: /api/stadiums/5 → id = 5

    const stadium = await findStadiumById(id);
// llama al service para buscar el estadio en la base de datos

    res.status(200).json({
    success: true,
    data: stadium,
    })
// el controller envía el resultado al cliente

  } catch (error) {

    res.status(500).json({
    success: false,
    message: "Could not find the stadium or internal error occur"
    })
// si ocurre un error se devuelve un mensaje al cliente

  }
}