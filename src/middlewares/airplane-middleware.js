const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');
const AppError=require('../utils/error/app-error');

function validatecreateReq(req,res,next){
  if(!req.body.modelNumber){
    ErrorResponse.error=new AppError('Model number not found in the request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  next();
}

module.exports=validatecreateReq;