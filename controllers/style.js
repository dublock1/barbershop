const express = require('express')


const styleApi = require('../models/style.js')


const styleRouter = express.Router()

styleRouter.get('/', (req, res) => {
    styleApi.getAllStyles()
        .then((styles) => {
            res.json(styles)
        })
})

styleRouter.get('/:styleId', (req, res) => {
    styleApi.getStyle(req.params.styleId)
    .then((style) => {
        res.json(style)
    })
})

styleRouter.post('/', (req, res) => {
    styleApi.addNewStyle(req.body)
    .then((style) => {
        res.json(style)
    })
})

styleRouter.delete('/:styleId', (req, res) => {
    styleApi.deleteStyle(req.params.styleId)
    .then((deleteStyle) => {
        res.json(deleteStyle)
    })
})

module.exports = {
  styleRouter
}
