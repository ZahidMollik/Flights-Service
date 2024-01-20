const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

function validatecreateReq(req,res,next){
  if(!req.body.flightNumber){
    ErrorResponse.error=new AppError('Flights Number not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.airplaneId){
    ErrorResponse.error=new AppError('Airplane id not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.departureAirportId){
    ErrorResponse.error=new AppError('departureAirportIds not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.arrivalAirportId){
    ErrorResponse.error=new AppError('arrivalAirportId not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.departureTime){
    ErrorResponse.error=new AppError('departureTime not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.arrivalTime){
    ErrorResponse.error=new AppError('arrivalTime not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.price){
    ErrorResponse.error=new AppError('price not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  if(!req.body.totalSeats){
    ErrorResponse.error=new AppError('totalSeats not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  next();
}

function validateUpdateRemainingSeatsReq(req,res,next){
  if(!req.body.seats){
    ErrorResponse.error=new AppError('seats not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
  }
  next();
}

module.exports={
  validatecreateReq,
  validateUpdateRemainingSeatsReq
};