import { Router } from "express";
import commentController from "../../controller/comment/index.js";
import commentValidator from "../../validator/comment/index.js";
const commentRoute = Router();
commentRoute.get("/comment",commentController.getAll);
commentRoute.post("/comment",commentValidator.create,commentController.create);
commentRoute.put("/comment",commentController.update);
export default commentRoute;