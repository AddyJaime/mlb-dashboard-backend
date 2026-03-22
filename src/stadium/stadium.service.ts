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

if(filters.capacity){
if(filters.capacity === "UNDER_40K"){
  "LT: less than"
  where.capacity = {lt: 40000};
}

if(filters.capacity === "BETWEEN_40K_45K"){
  "GTE: greater than or equal, LTE: less than or equal"
where.capacity = {gte: 40000, lte:45000}
}

  "GT: greater than"
if(filters.capacity ===  "OVER_45K"){
where.capacity = {gt: 45000}
}
}

// busca las primeras palabras del equipo escrito 
where.name_team = {
  contains: filters.name_team,
  mode: "insensitive"
}

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
    // dame el estadio donde el id sea exactamente igual a este valor 
    where: {
      id: id
    }
  })

}
// busca un estadio específico por id
// Prisma genera algo como:
// SELECT * FROM Stadium WHERE id = 5
// devuelve un solo resultado o null si no existe

export const findStadiumsByIds = async (idsArray:number[])=> {
  console.log(idsArray)
 return await prisma.stadium.findMany({
  // dame todos los stadiums donde el id esté dentro de la lista idsArray
  where: {
    id:{
      in: idsArray,
    }
  }
 })
}

export const findStadiumAttendance = async (stadium_id: number)=> {
  console.log(stadium_id)
  // ve a la tabla attenance
return await prisma.attendance.findMany({
  // pero solo donde
  where: {
    // 👉 izquierda = campo en la base de datos
// 👉 derecha = variable que tú tienes
    stadium_id: stadium_id
  },
  orderBy: {
    year: "asc"
  },
  select: {
    year: true,
    total_attendance: true
  }
})
}