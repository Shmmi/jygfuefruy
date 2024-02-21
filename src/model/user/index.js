import {DataTypes} from "sequelize";
import sequelize from "../../db/config.js";
const userModel = sequelize.define(
    "User",{
        name:{
            type: DataTypes.STRING(20),
        },
        email:{
            type: DataTypes.STRING(50),
        },
        password:{
            type:DataTypes.STRING(20),
        },
    },
    {
        paranoid:true,
    }
);
export default userModel;