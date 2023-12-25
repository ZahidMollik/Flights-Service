class AppError extends Error
{
  constructor(message,statusCode){
    super(message);
    this.statusCode=statusCode;
    this.explainaton=message;
  }
}

module.exports=AppError;