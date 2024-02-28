import userModel from "./index.js";
import sequelize from "../../db/config.js";

const UserFollowerModel = sequelize.define("userFollower");
UserFollowerModel.belongsTo(userModel,{as:"followers"});
UserFollowerModel.belongsTo(userModel,{as:"folowee"});
userModel.belongsToMany(userModel,{through:UserFollowerModel,as:"followers",foreignKey:"followeeId"});
userModel.belongsToMany(userModel,{through:UserFollowerModel,as:"followee",foreignKey:"followerId"});

export default UserFollowerModel;
