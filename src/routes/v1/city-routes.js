const express=require('express');
const { cityController } = require('../../controllers');
const {CityMiddleware}=require('../../middlewares')
const router=express.Router();

router.post('/',CityMiddleware.validcreateReq,cityController.CreateCity);
router.delete('/:id',cityController.DestroyCity);
router.get('/:id',cityController.GetCity);
router.get('/',cityController.GetAllCity);
router.patch('/:id',cityController.UpdateCity);

module.exports=router;