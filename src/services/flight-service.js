const {FlightRepository}=require('../repositories');
const flightrepository=new FlightRepository();
const AppError = require('../utils/error/app-error');
const { StatusCodes } = require('http-status-codes');


async function createFlight(data){
  try {
    const flight=await flightrepository.create(data);
    return flight;
  } catch (error) {
    if(error.name=='SequelizeValidationError'){
      let explaination=[];
      error.errors.forEach(err => {
         explaination.push(err.message);
      });
      throw new AppError(explaination,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('Something went wrong while creating flight',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


module.exports={
  createFlight,
}