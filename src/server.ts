import express, { Application } from "express";
import stadiumRoutes from "./stadium/stadium.routes"
import path from "path";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// connect routes
app.use("/api/stadiums", stadiumRoutes);

// this means everthing that is in this folder is public in the nav
app.use('/images', express.static(path.join(__dirname, "../images")))


// ordenar json
app.set("json spaces", 2)


// Start the server
app.listen(Number(port), "0.0.0.0", ()=> {
  console.log(`Server is running on ${port}`);
})
