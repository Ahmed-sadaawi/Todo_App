/* بسم الله الرحمن الرحيم */

import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// Routes:
import todoRouter from "./handles/indexHandler";

// app and port
const app: Application = express(); const PORT: Number = 5000;

//Middleweres
app.use(cors());
app.use(express.json());

// get 
app.get('/', (req, res) => { res.send('السلام عليكم') });

// make a Restfull api and CRUD oprations
todoRouter(app);

// listen
app.listen(PORT, () => console.log('Server is running at http://localhost:' + PORT))

/* الحمد لله رب العالمين */