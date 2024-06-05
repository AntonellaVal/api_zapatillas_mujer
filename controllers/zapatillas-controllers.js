const {zapatillas} = require("../zapatillas");

const getzapatillas = (req , res) =>{

    return res.json({
        ok: true,
        statusCode: 200,
        zapatillas
    });
}

const getzapatillasById = (req = request , res = response) =>{

    let id = parseInt(req, params , id);
    let zapatillaBuscar ="";

    zpatillaBuscar = zapatillas.find((zapatillas) =>{
        return zapatillas.id === id;
    })

    if (zapatillaBuscar){
        return res.json({
            ok: true,
            statusCode: 200,
            zapatillaBuscar
        });
    } else {
        return res.json ({
            ok: false,
            statusCode: 404,
            msg:"No hay equipo con esa id"
        });
    }
}

module.exports = {
    getzapatillas,
    getzapatillasById
}