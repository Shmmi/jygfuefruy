import { DataTypes} from "sequelize";
import userModel from "../user/index.js";
import sequelize from "../../db/config.js";


const postModel= sequelize.define(
    "Post",{
        title:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING(200),
        },
    },
    {
        paranoid: true,
    }
);
userModel.hasMany(postModel);
postModel.belongsTo(userModel);
export default postModel;