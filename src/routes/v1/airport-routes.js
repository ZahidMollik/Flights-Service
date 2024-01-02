const express=require('express');
const { airportController } = require('../../controllers');
const { AirportMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/',AirportMiddleware,airportController.createAirport);
router.delete('/:id',airportController.destroyAirport);
router.get('/:id',airportController.GetAirport);
router.get('/',airportController.GetAirports);
router.patch('/:id',airportController.UpdateAirport);


module.exports=router;