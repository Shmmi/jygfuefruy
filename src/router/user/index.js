import { Router } from "express";
import UserController from "../../controller/user/index.js";
const userRoutes = Router();
userRoutes.post("/user",UserController.create);
userRoutes.put("/user",UserController.update);

export default userRoutes;