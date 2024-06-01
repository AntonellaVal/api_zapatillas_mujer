const express = require("express");
const app = express();
const port = 3001;

const {getzapatillas , getzapatillasById} = require("./controllers/zapatillas-controllers")

app.get("/", getzapatillas);

app.get("/:id", getzapatillasById);

app.listen(port, ()=>{
    console.log (`conectado correctamente al puerto: ${port}`)
})
