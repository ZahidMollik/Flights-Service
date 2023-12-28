const express=require('express');
const router=express.Router();
const airplaneRoutes=require('./aiplane-routes');
const { infoController } = require('../../controllers');
router.get('/info',infoController)
router.use('/airplanes',airplaneRoutes);

module.exports=router;