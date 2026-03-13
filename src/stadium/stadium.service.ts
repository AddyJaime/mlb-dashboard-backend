import { League, Prisma } from "@prisma/client";
import { prisma } from "../config/prisma";
import { StadiumFilters } from "../types/stadium.types";

// CONSULTAS A LA BASE DE DATOS
export const findAllStadiums = async (filters: StadiumFilters) => {

  console.log("filters", filters)
// DEBUG: muestra qué filtros recibió el service desde el controller
// ejemplo: { state: "ny" }

  let where: Prisma.StadiumWhereInput = {};
// objeto donde se construyen las condiciones para la consulta SQL
// empieza vacío porque no sabemos qué filtros vienen

  if (filters.league) {
    where.league = filters.league;
  }
// si existe league en filters se agrega al objeto where
// ejemplo: { league: "AL" }

  if (filters.state) {
    where.state = filters.state;
  }
// si existe state en filters se agrega al objeto where
// ejemplo final: { league: "AL", state: "NY" }

  console.log("Where query", where)
// DEBUG: muestra cómo quedó la query que se enviará a la base de datos

// aqui el service consulta la base de datos usando Prisma
  const stadiums = await prisma.stadium.findMany({
    where
  })
// Prisma convierte esto automáticamente en SQL
// ejemplo:
// SELECT * FROM Stadium WHERE league='AL' AND state='NY'

// aqui el service devuelve los resultados al controller
  return stadiums;
};

export const findStadiumById = async (id: number) => {

  return await prisma.stadium.findUnique({
    where: {
      id: id
    }
  })

}
// busca un estadio específico por id
// Prisma genera algo como:
// SELECT * FROM Stadium WHERE id = 5
// devuelve un solo resultado o null si no existe