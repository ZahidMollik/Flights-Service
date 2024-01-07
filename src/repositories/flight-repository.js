const CrudRepository = require("./crud-repository");
const {Flight} = require("../models");

class flightRepository extends CrudRepository
{
  constructor(){
    super(Flight);
  }

  async getAllFlights(filter,sort){
    const flights=await Flight.findAll({
      where:filter,
      order:sort
    });
    return flights;
  }
}

module.exports=flightRepository;