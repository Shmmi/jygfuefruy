import { Router } from "express";
import commentController from "../../controller/comment/index.js";
import commentValidator from "../../validator/comment/index.js";
import AuthenticateMiddleware from "../../Middleware/muiddleware.js";
const commentRoute = Router();
commentRoute.get("/comment",AuthenticateMiddleware,commentController.getAll);
commentRoute.post("/comment",AuthenticateMiddleware,commentValidator.create,commentController.create);
commentRoute.put("/comment/:commentId",AuthenticateMiddleware,commentController.update);
export default commentRoute;