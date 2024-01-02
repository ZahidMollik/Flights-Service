const { StatusCodes } = require("http-status-codes");
const {AirportService } = require("../services");
const {SuccessResponse,ErrorResponse}=require('../utils/common');

async function createAirport(req,res){
  try {
    const airport=await AirportService.createAirport({
      name:req.body.name,
      code:req.body.code,
      address:req.body.address,
      cityId:req.body.cityId
    });
    SuccessResponse.data=airport;
    return res.status(StatusCodes.CREATED)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

async function destroyAirport(req,res){
  try {
    const response=await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data=response;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

async function GetAirport(req,res){
  try {
    const response=await AirportService.GetAirport(req.params.id);
    SuccessResponse.data=response;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

async function GetAirports(req,res){
  try {
    const response=await AirportService.GetAirports();
    SuccessResponse.data=response;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

async function UpdateAirport(req,res){
  try {
    const airport=await AirportService.UpdateAirport(req.params.id,{
      name:req.body.name,
      code:req.body.code,
      address:req.body.address,
      cityId:req.body.cityId
    });
    SuccessResponse.data=airport;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

module.exports={
  createAirport,
  destroyAirport,
  GetAirport,
  GetAirports,
  UpdateAirport
}