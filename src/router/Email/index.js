import  Router  from "express";

const EmaiRouter = Router();
import main from "../../controller/Email/index.js";

EmaiRouter.post('/sendEmail',main)

export default EmaiRouter;