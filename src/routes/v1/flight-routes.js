const express=require('express');
const { flightController } = require('../../controllers');
const { FlightMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/',FlightMiddleware,flightController.CreateFlight);
router.get('/',flightController.GetAllFlights);

module.exports=router;