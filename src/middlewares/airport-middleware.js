const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

function validatecreateReq(req,res,next){
  if(!req.body.name){
    ErrorResponse.error=new AppError('Airport name not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.code){
    ErrorResponse.error=new AppError('Airport code not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.address){
    ErrorResponse.error=new AppError('Airport address not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.cityId){
    ErrorResponse.error=new AppError('cityId not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  next();
}

module.exports=validatecreateReq;