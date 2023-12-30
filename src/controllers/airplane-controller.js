const { StatusCodes } = require('http-status-codes');
const {AirplaneService}=require('../services');
const { SuccessResponse,ErrorResponse } = require('../utils/common');

async function createAirplane(req,res){
  try {
    const airplane=await AirplaneService.CreateAirplane({
       modelNumber:req.body.modelNumber,
       capacity:req.body.capacity
    });
    SuccessResponse.data=airplane;
    return res.status(StatusCodes.CREATED)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
    
  }
}

async function GetAirplane(req,res){
  try {
    const airplane=await AirplaneService.GetAirplane(req.params.id);
    SuccessResponse.data=airplane;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
    
  }
}

async function GetAllAirplane(req,res){
  try {
    const airplanes=await AirplaneService.GetAllAirplane();
    SuccessResponse.data=airplanes;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
    
  }
}

async function DestroyAirplane(req,res){
  try {
    const airplane=await AirplaneService.DestroyAirplane(req.params.id);
    SuccessResponse.data=airplane;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
    
  }
}

async function UpdateAirplane(req,res){
  try {
    const airplane=await AirplaneService.UpdateAirplane(req.params.id,{
       capacity:req.body.capacity
    });
    SuccessResponse.data=airplane;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
    
  }
}

module.exports={
  createAirplane,
  GetAirplane,
  GetAllAirplane,
  DestroyAirplane,
  UpdateAirplane
}