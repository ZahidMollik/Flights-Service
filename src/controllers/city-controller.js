const { StatusCodes } = require('http-status-codes');
const {CityService}=require('../services');
const { SuccessResponse,ErrorResponse } = require('../utils/common');

async function CreateCity(req,res){
  try {
    const city=await CityService.CreateCity({name:req.body.name});
    SuccessResponse.data=city;
    return res.status(StatusCodes.CREATED)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    res.status(error.statusCode)
       .json(ErrorResponse);
  }
}

async function DestroyCity(req,res){
  try {
    const city=await CityService.DestroyCity(req.params.id);
    SuccessResponse.data=city;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    res.status(error.statusCode)
       .json(ErrorResponse);
  }
}

async function GetCity(req,res){
  try {
    const city=await CityService.GetCity(req.params.id);
    SuccessResponse.data=city;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    res.status(error.statusCode)
       .json(ErrorResponse);
  }
}

async function GetAllCity(req,res){
  try {
    const city=await CityService.GetAllCity();
    SuccessResponse.data=city;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    res.status(error.statusCode)
       .json(ErrorResponse);
  }
}

async function UpdateCity(req,res){
  try {
    const city=await CityService.UpdateCity(req.params.id,{
      name:req.body.name
    });
    SuccessResponse.data=city;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    res.status(error.statusCode)
       .json(ErrorResponse);
  }
}

module.exports={
  CreateCity,
  DestroyCity,
  GetCity,
  GetAllCity,
  UpdateCity
}