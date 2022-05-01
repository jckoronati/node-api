import { Router } from "express";

const accountRoutes = Router();

accountRoutes.get('/', (request, response) => {
    return response.status(200).send('Inscritos rota');
});

export { accountRoutes };