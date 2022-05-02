import { Router } from "express";

const accountRoutes = Router();

accountRoutes.get("/", (request, response) =>
  response.status(200).send("Inscritos rota")
);

export { accountRoutes };
