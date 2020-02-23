require('./config/config')


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Cada petición que hagamos pasará por estas dos líneas. Son middleWare
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/usuario', (req, res) => {
    res.json('Hello Sirius');
});

app.post('/usuario', (req, res) => {
    //body parser
    let body = req.body;
    //Códigos en peticiones HTTP
    if(body.nombre === undefined) {
        res.status( 400 ).json({
            ok : false,
            mensaje : 'Falta el nombre'
        })
    } else {
        res.json({
            body
        }); 
    }


});

app.put('/usuario/:id', (req, res) => {
    let varId = req.params.id;

    res.json({
        id : varId
    });
});

app.delete('/usuario', (req, res) => {
    res.json('Hello Sirius');
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: 3000");
})

