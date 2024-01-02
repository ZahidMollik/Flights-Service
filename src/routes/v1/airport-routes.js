const express=require('express');
const { airportController } = require('../../controllers');
const router=express.Router();

router.post('/',airportController.createAirport);
router.delete('/:id',airportController.destroyAirport);
router.get('/:id',airportController.GetAirport);
router.get('/',airportController.GetAirports);
router.patch('/:id',airportController.UpdateAirport);


module.exports=router;