const mensajeBienvenida = require("./messages/message");
const path = require("path");
const express = require('express')
const app = express()


app.get('/sucursales', function (req, res) {
  res.sendFile(path.join(__dirname, "./sucursales.json"));
})

app.get('/cambiarplan', function (req, res) {
  res.send('En este momento, no se esta realizando ningín cambio de planes... <a href="/">ir al menu</a>')
})

app.get('/reclamo', function (req, res) {
  res.sendFile(path.join(__dirname, "views/reclamo.html"))
})

app.get('/promociones', function (req, res) {
  res.sendFile(path.join(__dirname, "./views/promociones.html"));
})


app.get('/', (req, res) => {
  res.send(mensajeBienvenida)
})


app.listen(8080);