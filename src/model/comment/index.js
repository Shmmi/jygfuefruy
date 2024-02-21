import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/index.js";
import postModel from "../post/index.js";

const commentModel=sequelize.define(
    "Comment",{
       postId:{
            type: DataTypes.INTEGER(20),
            allowNull: false,
       },
       userId:{
            type: DataTypes.INTEGER(20),
            allowNull: false,
       },
       content:{
        type: DataTypes.STRING(100),
        allowNull:false,
       },

    },
    {
        paranoid:true,
    }
);
userModel.hasMany(commentModel);
commentModel.belongsTo(userModel);
postModel.hasMany(commentModel);
commentModel.belongsTo(postModel);
export default commentModel;