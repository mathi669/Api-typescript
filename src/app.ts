import "dotenv/config"
import express  from "express";
import cors from "cors"
import { router } from "./routes";
import db from "./config/mongo"

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(express.json())
app.use(router)
db().then(()=>console.log("Conexion ready"))
app.listen(PORT, () => console.log(`Listen on port ${PORT}`))