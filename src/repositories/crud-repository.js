const AppError=require('../utils/error/app-error');
const {StatusCodes}=require('http-status-codes');

class CrudRepository{
  constructor(model){
    this.model=model;
  }
  async create(data){
    const response=await this.model.create(data);
    return response;
  }

  async destroy(modelid){
    const response=await this.model.destroy({
      where:{
        id:modelid
      }
    });
    if(!response){
      throw new AppError('cannot found data to destroy',StatusCodes.NOT_FOUND);
    }
    return response;
  }
  async get(modelid){
    const response=await this.model.findByPk(modelid);
    if(!response){
      throw new AppError('cannot found data',StatusCodes.NOT_FOUND);
    }
    return response;
  }
  async getAll(){
    const response=await this.model.findAll();
    return response;
  }
  async update(modelid,data){
    const response=await this.model.update(data,{
      where:{
        id:modelid
      }
    });
    if(!response){
      throw new AppError('cannot found data to update',StatusCodes.NOT_FOUND);
    }
    return response;
  }
}

module.exports=CrudRepository;