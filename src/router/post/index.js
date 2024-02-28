import { Router } from "express";
import PostController from "../../controller/post/index.js";
import PostValidator from "../../validator/post/index.js";
import AuthenticateMiddleware from "../../Middleware/muiddleware.js";
const postRoutes = Router();
postRoutes.get("/post",AuthenticateMiddleware,PostController.getAll);
postRoutes.post("/post",PostValidator.create,AuthenticateMiddleware,PostController.create);
postRoutes.put("/post/:postId",PostController.update);
export default postRoutes;