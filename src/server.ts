import express from "express";
import { accountRoutes } from "./routes/account.routes";

const app = express();

app.use('/accounts', accountRoutes);

app.listen(3333, () => console.log('Server Running'));