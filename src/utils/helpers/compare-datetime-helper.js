function compareDateTime(time1,time2){
  let DateTime1=new Date(time1);
  let DateTime2=new Date(time2);
  return DateTime1.getTime()<DateTime2.getTime();
}

module.exports={
  compareDateTime
}