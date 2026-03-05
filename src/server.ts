import express, { Application, Request, Response } from "express";
import stadiumRoutes from "./stadium/stadium.routes"

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// connect routes
app.use("/api/stadiums", stadiumRoutes);

// Start the server
app.listen(Number(port), "0.0.0.0", ()=> {
  console.log(`Server is running on ${port}`);
})
