const { StatusCodes } = require('http-status-codes');
const {AirportRepository}=require('../repositories');
const AppError = require('../utils/error/app-error');
const airportRepository=new AirportRepository();

async function createAirport(data){
  try {
    const airport=await airportRepository.create(data);
    return airport;
  } catch (error) {
    if(error.name=='SequelizeUniqueConstraintError' | error.name=='SequelizeValidationError'){
      console.log('hello');
      let explaination=[];
      error.errors.forEach(err => {
        explaination.push(err.message)
      });
      throw new AppError(explaination,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('cannot create new Airport',StatusCodes.INTERNAL_SERVER_ERROR);
  }

}

async function destroyAirport(Id){
  try {
    const response=await airportRepository.destroy(Id);
    return response;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new  AppError('The airport you want to delete is not present',error.statusCode);
    }
    throw new AppError('Something Wrong cannot delete airport',StatusCodes.INTERNAL_SERVER_ERROR);
    
  }
}

async function GetAirport(Id){
  try {
    const airport=await airportRepository.get(Id);
    return airport;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new  AppError('The airport you want to Get is not present',error.statusCode);
    }
    throw new AppError('Something Wrong cannot fetch data',StatusCodes.INTERNAL_SERVER_ERROR);
    
  }
}

async function GetAirports(){
  try {
    const airports=await airportRepository.getAll();
    return airports;
  } catch (error) {
    throw new AppError('Something Wrong cannot fetch data',StatusCodes.INTERNAL_SERVER_ERROR);
    
  }
}

async function UpdateAirport(id,data){
  try {
    const airport=await airportRepository.update(id,data);
    return airport;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new  AppError('The airport you want to update is not present',error.statusCode);
    }
    throw new AppError('cannot update the Airport',StatusCodes.INTERNAL_SERVER_ERROR);
  }

}


module.exports={
  createAirport,
  destroyAirport,
  GetAirport,
  GetAirports,
  UpdateAirport
}