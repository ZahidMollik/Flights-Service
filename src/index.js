const express=require('express');
const {ServerConfig}=require('./config');
const apiRoutes=require('./routes');
const serverConfig = require('./config/server-config');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRoutes);
app.listen(serverConfig.PORT,()=>{
  console.log(`Server Running on Port: ${serverConfig.PORT}`);
});