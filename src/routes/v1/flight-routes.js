const express=require('express');
const { flightController } = require('../../controllers');
const {FlightMiddleware}= require('../../middlewares');
const router=express.Router();

router.post('/',FlightMiddleware.validatecreateReq,flightController.CreateFlight);
router.get('/',flightController.GetAllFlights);
router.get('/:id',flightController.GetFlight);
router.patch('/:id/seats',FlightMiddleware.validateUpdateRemainingSeatsReq,flightController.UpdateSeats);

module.exports=router;