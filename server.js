const express = require('express')
const app = express()


const { barbershopRouter } = require('./controllers/barbershop.js')
const { barberRouter } = require('./controllers/barber.js')



app.use(express.urlencoded({extended: true}))


app.use(express.json())



app.use(express.static(`${__dirname}/client/build`))



app.use('/api/barbershops', barbershopRouter)
app.use('/api/barbers', barberRouter)


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
