const {AirplaneRepository}=require('../repositories')
const airplanerepository=new AirplaneRepository();
const AppError=require('../utils/error/app-error');
const {StatusCodes}=require('http-status-codes');

async function CreateAirplane(data){
  try {
    const Airplane=await airplanerepository.create(data);
    return Airplane;
  } catch (error) {
    if(error.name=="SequelizeValidationError"){
      let explaination=[];
      error.errors.forEach(err => {
        explaination.push(err.message);
      });
      throw new AppError(explaination,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('cannot create new airplane',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function GetAirplane(id){
  try {
    const airplane=await airplanerepository.get(id);
    return airplane;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError('The Airplane you request is not present',error.statusCode);
    }
    throw new AppError('cannot fetch the data',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function GetAllAirplane(){
  try {
    const airplanes=await airplanerepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError('cannot fetch the data',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function GetAirplane(id){
  try {
    const airplane=await airplanerepository.get(id);
    return airplane;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError('The Airplane you request to get is not present',error.statusCode);
    }
    throw new AppError('cannot fetch the data',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function DestroyAirplane(id){
  try {
    const response=await airplanerepository.destroy(id);
    return response;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError('The Airplane you request to delete is not present',error.statusCode);
    }
    throw new AppError('cannot delete your requested airplane',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function UpdateAirplane(id,data){
  try {
    const Airplane=await airplanerepository.update(id,data);
    return Airplane;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError('The Airplane you request to update is not present',error.statusCode);
    }
    throw new AppError('cannot update your requested airplane',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  CreateAirplane,
  GetAirplane,
  GetAllAirplane,
  DestroyAirplane,
  UpdateAirplane
};