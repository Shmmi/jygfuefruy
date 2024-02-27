import userModel from "../../model/user/index.js";
import  jwt  from "jsonwebtoken";
const authController ={
    login: async (req,res) =>{
    const payload = req.body;
    const user = await userModel.findOne({
        where: {email:payload.email,password:payload.password}
    })
    if(!user){
        res.status(401).json({
            message: "Invalid user",
        });
    }
    const token = jwt.sign({
        name:user.name,
        email:user.email,
        expiry:Math.floor(Date.now() / 1000) + 60 * 60,
    },
    process.env.signature);
    res.json({
        message:"User logged in successfully",
        token,
    });
    }
    
}
export default authController;