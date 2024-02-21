import { Router } from "express";
import userRoutes from "./user/index.js";
import postRoutes from "./post/index.js";
import commentRoute from "./comment/index.js";
const allRoutes = Router();
allRoutes.use(userRoutes);
allRoutes.use(postRoutes);
allRoutes.use(commentRoute);
export default allRoutes;