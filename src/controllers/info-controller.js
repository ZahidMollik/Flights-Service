const {StatusCodes}=require('http-status-codes');
const {SuccessResponse}=require('../utils/common');
const info=function (req,res){
  return res.status(StatusCodes.OK)
            .json(SuccessResponse);
}

module.exports={
  info
};