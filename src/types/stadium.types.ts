import { League } from "@prisma/client"

export type StadiumFilters = {
  league?: League,
  state? : string,
  capacity?: string
}