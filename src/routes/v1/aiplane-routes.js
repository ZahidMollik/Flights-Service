const express=require('express');
const router=express.Router();
const {airplaneController}=require('../../controllers')
const {AirplaneMiddleware}=require('../../middlewares')

router.post('/',AirplaneMiddleware,airplaneController.createAirplane);
router.get('/',airplaneController.GetAllAirplane);
router.get('/:id',airplaneController.GetAirplane);
router.delete('/:id',airplaneController.DestroyAirplane);
router.patch('/:id',airplaneController.UpdateAirplane);

module.exports=router;
