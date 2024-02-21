import Sequelize  from "sequelize";
const sequelize = new Sequelize("mern12","postgres","1234567",{
    port: 5432,
    host: "localhost",
    dialect: "postgres",
});
const connectDB = async () =>{
    try{
        await sequelize.authenticate();
        console.log("Connection established");
    }
    catch(error){
        console.log("Error occurred");
    }
}
export default sequelize;
export {connectDB};