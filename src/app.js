import  Express  from "express";
import allRoutes from "./router/index.js";
import { connectDB } from "./db/config.js";
import dbinit from "./db/init.js";
import { json } from "sequelize";
const app = Express()
connectDB();
dbinit().then(()=>{console.log("db synced")})
app.use(Express.json());
app.use(allRoutes);
app.listen(3000, function(){
    console.log("server started")
})
