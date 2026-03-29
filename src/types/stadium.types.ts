import { League } from "@prisma/client"

export type StadiumFilters = {
  league?: League,
  state? : string,
  capacity?: string,
  name_team?: string

}

export type AttendanceFilters = {
  year?: number | {gte?: number; lte?:number}
}