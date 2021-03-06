const express = require("express");

const barbershopApi = require("../models/barbershop.js");
const barberApi = require("../models/barber.js");

const barbershopRouter = express.Router();

barbershopRouter.get("/", (req, res) => {
  barbershopApi.getAllBarbershops().then(barbershops => {
    res.json(barbershops);
  });
});

barbershopRouter.get("/:barbershopId", (req, res) => {
  barbershopApi.getBarbershop(req.params.barbershopId).then(barbershop => {
    barberApi.getBarberByShopId(barbershop._id).then(barbers => {
      res.json({ barbershop, barbers });
    });
  });
});

barbershopRouter.post("/", (req, res) => {
  barbershopApi.addNewBarbershop(req.body).then(barbershop => {
    res.json(barbershop);
  });
});

barbershopRouter.delete("/:barbershopId", (req, res) => {
  barbershopApi
    .deleteBarbershop(req.params.barbershopId)
    .then(deleteBarbershop => {
      res.json(deleteBarbershop);
    });
});

module.exports = {
  barbershopRouter
};
