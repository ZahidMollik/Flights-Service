const {CityRepository}=require('../repositories');
const cityRepository=new CityRepository();
const AppError=require('../utils/error/app-error');
const {StatusCodes}=require('http-status-codes')

async function CreateCity(data){
  try {
    const city=await cityRepository.create(data);
    return city;
  } catch (error) {
    console.log(error);
    if(error.name=="SequelizeUniqueConstraintError"){
      let explaination=[];
      error.errors.forEach(err => {
        explaination.push(err.message);
      });
      throw new AppError(explaination,StatusCodes.BAD_REQUEST);
    }
    throw new AppError("cannot create new city",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function DestroyCity(modelId){
  try {
    const city=await cityRepository.destroy(modelId);
    return city;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError('The city you request to destroy is not present',error.statusCode);
    }
    throw new AppError("cannot delete your requested city",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function GetCity(modelId){
  try {
    const city=await cityRepository.get(modelId);
    return city;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError('The City you request to get is not present',error.statusCode);
    }
    throw new AppError("cannot fetch city",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function GetAllCity(){
  try {
    const city=await cityRepository.getAll();
    return city;
  } catch (error) {
    throw new AppError("cannot fetch cities",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function UpdateCity(modelId,data){
  try {
    const city=await cityRepository.update(modelId,data);
    return city;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError('The city you request to update is not present',error.statusCode);
    }
    throw new AppError("cannot update your requested city",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  CreateCity,
  DestroyCity,
  GetCity,
  GetAllCity,
  UpdateCity
}