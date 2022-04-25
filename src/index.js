const express = require('express');

const app = express();

app.get("/", (request, response) =>
    response.json({ message: "Hello World Ingite Node JS!" })
);

app.listen(3333);