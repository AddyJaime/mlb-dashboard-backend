import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic Route testing
app.get("/health", (req: Request, res:Response)=> {
  res.status(200).json({status: "ok"})
})

// Start the server
app.listen(Number(port), "0.0.0.0", ()=> {
  console.log(`Server is running on ${port}`);
})
