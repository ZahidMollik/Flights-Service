const express=require('express');
const router=express.Router();
const airplaneRoutes=require('./aiplane-routes');
const cityRoutes=require('./city-routes');
const AirportRoutes=require('./airport-routes');
const { infoController } = require('../../controllers');
router.get('/info',infoController)
router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);
router.use('/airports',AirportRoutes)
module.exports=router;