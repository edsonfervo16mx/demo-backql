require("dotenv").config()
var express = require("express")
var app = express()

var Model = require('./models/index')

app.get("/", function (request, response) {
    console.log(process.env.APP_MESSAGE_SUCCESS)

    /** Example **/
    /*
    Model.Empresa.create({ name: 'rancho aguacate', description: 'rancho', logo: 'aguacate.png', location: 'Comalcalco', rfc: 'agua1234', slogan: 'aguacate', mail: 'aguacate@mail.com', telephone: '93312134545', website: 'aguacate.mx' })
    /**/
    console.log(process.env.APP_MESSAGE_SUCCESS)
})
console.log('Backql en http://localhost:' + process.env.APP_PORT)
app.listen(process.env.APP_PORT)