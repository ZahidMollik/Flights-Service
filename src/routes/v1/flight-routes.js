const express=require('express');
const { flightController } = require('../../controllers');
const { FlightMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/',FlightMiddleware,flightController.CreateFlight);

module.exports=router;