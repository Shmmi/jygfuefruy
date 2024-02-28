import  Jwt  from "jsonwebtoken";

const AuthenticateMiddleware =(req,res,next)=>{
    const headers = req.headers;

    let token = headers.authorization;

    token = token.split(" ");
    token = token[1]

    try{
        const userData = Jwt.verify(token, process.env.signature);

        // console.log(userData,"decode");
        req.user = userData;

    }catch(error){
        console.log(error,"error");

        return res.status(401).json({message:"Invald Token please try login again"})

    }

    next();
}

export default AuthenticateMiddleware;