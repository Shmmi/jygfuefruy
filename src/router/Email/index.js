import  Router  from "express";
import main from "../../controller/Email/index.js";
const EmaiRouter = Router();


EmaiRouter.post('/sendEmail',main)

export default EmaiRouter;