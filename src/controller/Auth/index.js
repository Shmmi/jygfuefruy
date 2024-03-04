import userModel from "../../model/user/index.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
const authController = {
    login: async (req, res) => {
        const payload = req.body;
        const user = await userModel.findOne({
            where: { email: payload.email }
        });

        if (!user) {
          return  res.status(401).json({
                message: "Invalid user",
            });
        }
        const result =await bcrypt.compare(payload.password, user.password);
        if (!result) {
          return  res.status(401).json({
                message: "Invalid user",
            });
        }

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,

        },
            process.env.signature, {
            expiresIn: "1m"
        });
        res.json({
            message: "User logged in successfully",
            token,
        });
    },


    register: async (req, res) => {
        try {
            const payload = req.body;
            const saltRounds = 10;
            const hPassword = await bcrypt.hash(payload.password, saltRounds)


            const user = await userModel.create({
                name: payload.name,
                email: payload.email,
                password: hPassword,
            })

            res.json({
                message: "hash created",
                user,

            })

        } catch (error) {
            console.log(error)
        }
    }

}
export default authController;

