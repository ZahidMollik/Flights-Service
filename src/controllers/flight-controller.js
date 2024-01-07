const {FlightService}=require('../services');
const {SuccessResponse,ErrorResponse}=require('../utils/common')
const {StatusCodes}=require('http-status-codes')
async function CreateFlight(req,res){
  try {
    const flight=await FlightService.createFlight({
      flightNumber:req.body.flightNumber,
      airplaneId:req.body.airplaneId,
      departureAirportId:req.body.departureAirportId,
      arrivalAirportId:req.body.arrivalAirportId,
      departureTime:req.body.departureTime,
      arrivalTime:req.body.arrivalTime,
      price:req.body.price,
      boardingGate:req.body.boardingGate,
      totalSeats:req.body.totalSeats
    });
    SuccessResponse.data=flight;
    return res.status(StatusCodes.CREATED)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

async function GetAllFlights(req,res){
  try {
    const flights=await FlightService.GetAllFlights(req.query);
    SuccessResponse.data=flights;
    return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

module.exports={
  CreateFlight,
  GetAllFlights
}