import { Request, Response } from "express";
import { findAllStadiums, findStadiumById, findStadiumsByIds, findStadiumAttendance } from "./stadium.service";
import { League } from "@prisma/client";
import { AttendanceFilters, StadiumFilters } from "../types/stadium.types";

// utils helper
import parseNumberQuery from "../utils/parseQuery";




export const getAllStadiums = async (req: Request, res: Response) => {
  try {

    console.log("Req Query:", req.query)
    // DEBUG: muestra en consola lo que el cliente envió en la URL
    // ejemplo: /api/stadiums?state=NY → { state: "NY" }

    // aqui el controller recibe los datos que manda el cliente
    // desde Postman, navegador o frontend
    let { league, state, capacity, name_team } = req.query;

    let filters: StadiumFilters = {}
    // objeto vacío donde se guardarán los filtros para la base de datos
    // se llena dependiendo de lo que envíe el cliente

    if (league) {
      filters.league = (league as League).toUpperCase() as League;
    }
    // si el cliente envía league, se agrega al objeto filters
    // toLowerCase() se usa para evitar problemas de mayúsculas

    if (state) {
      filters.state = (state as string).toUpperCase();
    }


    if (capacity) {
      // req.query siempre viene como un string por esa razon hay que cambiar capacity a un numero
      filters.capacity = (capacity as string).toUpperCase();
    }

    if (name_team) {
      filters.name_team = (name_team as string);
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

export const getStadiumById = async (req: Request, res: Response) => {
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

export const getStadiumsToCompare = async (req: Request, res: Response) => {
  try {
    // 1: sacos ids del objecto query
    let { ids } = req.query;

    // 2: validar que ids venga
    if (!ids) {
      res.status(400).json({
        success: false,
        message: "Ids query param is required "
      })
    }
    // 3: convertir string ya que el cliente siempre manda string a array de numeros 
    const idsArray = (ids as string).split(",").map(id => Number(id))

    // 4 : validar que no haya un no a number NAn
    if (idsArray.some(id => isNaN(id))) {
      res.status(400).json({
        sucess: false,
        message: "ids must be valid number"
      })
    }

    // 5: validar que no este vacio
    if (idsArray.length === 0) {
      res.status(400).json({
        success: false,
        message: "ids array can not be empty"
      })
    }

    const stadiums = await findStadiumsByIds(idsArray);

    res.status(200).json({
      success: true,
      data: stadiums,
    });

  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "internal Server error"
    })
  }
}

export const getStadiumAttendance = async (req: Request, res: Response) => {
  try {
    // ==============================
    // Params
    // ==============================
    let stadium_id = req.params.id
    let stadium_id_converted = Number(stadium_id)

    // ==============================
    // Query Params
    // ==============================
    // req.query = {
    //   year: "2023",
    //   from: "2020",
    //   to: "2024"
    // }
    let { year, from, to } = req.query

    const parsedYear = parseNumberQuery(year, "year")
    const parsedFrom = parseNumberQuery(from, "from")
    const parsedTo = parseNumberQuery(to, "to")

    let filters: AttendanceFilters = {}

    // ==============================
    // Validaciones
    // ==============================
    if (isNaN(stadium_id_converted)) {
      return res.status(400).json({
        success: false,
        message: "Id is not a number"
      })
    }

    // ==============================
    // Lógica de filtros
    // ==============================
    if (parsedYear !== undefined) {
      filters.year = parsedYear
    } 
    // aqui deberia ser asi y no asi parsedFrom && parsedTo !== undefined)
    // ya que se evaluaria asi parsedFrom && (parsedTo !== undefined)
    else if (parsedFrom !== undefined && parsedTo !== undefined) {
      filters.year = {
        // greater than or equal
        gte: parsedFrom,
        // less than or equal
        lte: parsedTo
      }
    } 
    else if (parsedFrom !== undefined || parsedTo !== undefined) {
      return res.status(400).json({
        success: false,
        message: "Both 'From' and 'To' are required for range"
      })
    }

    // ==============================
    // Service Call
    // ==============================
    const stadiumAttendance = await findStadiumAttendance(
      stadium_id_converted,
      filters
    )

    // ==============================
    // Response
    // ==============================
    res.status(200).json({
      success: true,
      data: stadiumAttendance
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal error occur"
    })
  }
}