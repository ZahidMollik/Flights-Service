const {FlightRepository}=require('../repositories');
const flightrepository=new FlightRepository();
const AppError = require('../utils/error/app-error');
const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const {CompareDateTime}=require('../utils/helpers')

async function createFlight(data){
  if(!CompareDateTime.compareDateTime(data.departureTime,data.arrivalTime)){
    throw new AppError('The departure time must be less than the arrival time',StatusCodes.BAD_REQUEST);
  }
  if(data.departureAirportId===data.arrivalAirportId){
    throw new AppError("departureAirportId and arrivalAirportId cannot be the same ",StatusCodes.BAD_REQUEST);
  }
  try {
    const flight=await flightrepository.create(data);
    return flight;
  } catch (error) {
    // console.log(error);
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

async function GetAllFlights(query){
  let customFilter={};
  let sortFilter=[];
  const endingTripTime=" 23:59:00";
  if(query.trips){
    const [departureAirportId,arrivalAirportId]=query.trips.split('-');
    if(departureAirportId===arrivalAirportId){
      throw new AppError("departureAirportId and arrivalAirportId cannot be the same ",StatusCodes.BAD_REQUEST);
    }
    customFilter.departureAirportId=departureAirportId;
    customFilter.arrivalAirportId=arrivalAirportId;

  }
  if(query.price){
    const [minPrice,maxPrice]=query.price.split('-');
    customFilter.price={
      [Op.between]:[minPrice,((maxPrice===undefined)?15000:maxPrice)]
    }
  }
  if(query.travellers){
    customFilter.totalSeats={
      [Op.gt]:query.travellers
    }
  }
  if(query.tripDate) {
    customFilter.departureTime = {
        [Op.between]: [query.tripDate,(query.tripDate + endingTripTime)]
    }
  }
  if(query.sort){
    const params=query.sort.split(',');
    const sortFilters=params.map((param) => param.split('-'));
    sortFilter=sortFilters;
  }
  try {
    const Flights=await flightrepository.getAllFlights(customFilter,sortFilter);
    return Flights;
  } catch (error) {
    throw new AppError('cannot fetch data of all the flights',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


module.exports={
  createFlight,
  GetAllFlights
}