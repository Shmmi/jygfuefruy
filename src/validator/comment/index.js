import Joi from "joi";
const commentValidator = {
  create: (req,res,next)=>{
  const schema = Joi.object({
    content: Joi.string().max(20).required(),
    userId:  Joi.number(),
    postId: Joi.number(),
  });
  const response = schema.validate(req.body);
  if(res.error){
    res.status().json({
        message: "Invalid data",
        error:res.error
    })
  }
  console.log(response);
  next();
  },  
}
export default commentValidator;