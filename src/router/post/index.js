import { Router } from "express";
import PostController from "../../controller/post/index.js";
const postRoutes = Router();
postRoutes.get("/post",PostController.getAll);
postRoutes.post("/post",PostController.create);
postRoutes.put("/post",PostController.update);
export default postRoutes;