const express = require('express')


const barberApi = require('../models/barber.js')


const barberRouter = express.Router()

 
barberRouter.get('/', (req, res) => {
    barberApi.getAllBarbers()
    .then((barbers) => {
        res.json(barbers)
    })
})

barberRouter.get('/:barberId', (req, res) => {
    
    barberApi.getBarber(req.params.barberId)
    .then((barber) => {
        res.json(barber)
    })
})

barberRouter.post('/', (req, res) => {
    barberApi.addNewBarber(req.body)
    .then((barber) => {
        res.json(barber)
    })
})

barberRouter.put('/:barberId', (req, res) => {
    barberApi.updateBarber(req.params.barberId, req.body)
    .then((updateBarber) => {
        res.json(updateBarber)
    })
})

barberRouter.delete('/:barberId', (req, res) => {
    barberApi.deleteBarber(req.params.barberId)
    .then((deleteBarber) => {
        res.json(deleteBarber)
    })
})


module.exports = {
  barberRouter
}