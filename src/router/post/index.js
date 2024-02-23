import { Router } from "express";
import PostController from "../../controller/post/index.js";
import PostValidator from "../../validator/post/index.js";
const postRoutes = Router();
postRoutes.get("/post",PostController.getAll);
postRoutes.post("/post",PostValidator.create,PostController.create);
postRoutes.put("/post",PostController.update);
export default postRoutes;