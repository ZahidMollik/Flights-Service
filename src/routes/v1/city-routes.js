const express=require('express');
const { cityController } = require('../../controllers');
const router=express.Router();

router.post('/',cityController.CreateCity);
router.delete('/:id',cityController.DestroyCity);
router.get('/:id',cityController.GetCity);
router.get('/',cityController.GetAllCity);
router.patch('/:id',cityController.UpdateCity);

module.exports=router;