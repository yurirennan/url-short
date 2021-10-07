import express from "express";

import { MongoConnection } from './database/MongoConnection';

import { routes } from "./routes";

const app = express();
const PORT = 3333;
const database = new MongoConnection();

database.connect();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log("Server is running...");
})