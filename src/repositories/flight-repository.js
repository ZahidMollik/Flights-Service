const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airport, City } = require("../models");
const { Sequelize } = require("sequelize");

class flightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const flights = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true,
          as: "Airplane_details",
        },
        {
          model: Airport,
          required: true,
          as: "Departure_Airport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirportId"),
              "=",
              Sequelize.col("Departure_Airport.code")
            ),
          },
          include: {
            model: City,
            required: true,
          },
        },
        {
          model: Airport,
          required: true,
          as: "Arrival_Airport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirportId"),
              "=",
              Sequelize.col("Arrival_Airport.code")
            ),
          },
          include: {
            model: City,
            required: true,
          },
        },
      ],
    });
    return flights;
  }

  async  updateRemainingSeats(flightId, seats, dec =true) {
    const flight = await Flight.findByPk(flightId);
    if (+dec) {
        await flight.decrement('totalSeats', { by: seats });
    } else {
        await flight.increment('totalSeats', { by: seats });
    }

    const updatedFlight=await Flight.findByPk(flightId);

    return updatedFlight;
}

  
}

module.exports = flightRepository;
