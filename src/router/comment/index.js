import { Router } from "express";
import commentController from "../../controller/comment/index.js";
const commentRoute = Router();
commentRoute.get(commentController.getAll);
commentRoute.post(commentController.create);
commentRoute.put(commentController.update);
export default commentRoute;