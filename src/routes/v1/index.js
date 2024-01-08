const express=require('express');
const router=express.Router();
const airplaneRoutes=require('./aiplane-routes');
const cityRoutes=require('./city-routes');
const AirportRoutes=require('./airport-routes');
const flightRoutes=require('./flight-routes');

router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);
router.use('/airports',AirportRoutes);
router.use('/flights',flightRoutes);

module.exports=router;