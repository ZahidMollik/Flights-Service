const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/error/app-error");
const {ErrorResponse  } = require("../utils/common");


function validcreateReq(req,res,next){
  if(!req.body.name){
    ErrorResponse.message="Something Wrong while creating city";
    ErrorResponse.error= new AppError('City name not found in your request',StatusCodes.BAD_REQUEST);
   return res.status(StatusCodes.BAD_REQUEST)
             .json(ErrorResponse);
  }
  next();
}

module.exports={
  validcreateReq
}