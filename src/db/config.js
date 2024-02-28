 import { config } from 'dotenv';
config({ path: './src/.env' });
import Sequelize  from "sequelize";


const env = process.env;
console.log(env,"env")
const sequelize = new Sequelize(env.db_name,env.db_user,env.db_password,{
    port: 5432,
    host: env.db_host,
    dialect: env.db_dialect
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