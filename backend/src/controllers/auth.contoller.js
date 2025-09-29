import Auth from "../models/auth.model.js"
import bcrypto from "crypto"

// Register 
exports.register = async (req, res, next)=>{
    const {firstname, email, password, confirmPassowrd, role} = req.body;

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const auth = await Auth.create({
            fullname,
            email,
            password: hashedPassword,
            role,
            isVerified: true,
        });

        const JWT_EXPIRES_IN_MS = 24 * 60 * 60 * 1000;

        // const token = jwt.sign(
        //     { id: auth._id, role: auth.role },
        //     process.env.JWT_SECRET,
        //     {
        //         expireIn : "7d",
        //     }
        // );

        // cookie option
        const options = {
            expires: new Date(Date.now()+ JWT_EXPIRES_IN_MS),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        };

        res
        .status(201)
        .json({
            success: true,
            auth:{
                id: auth._id,
                fullname: auth.fullname,
                email: auth.email,
                role: auth.role,
                isVerified: auth.isVerified,
            },
        });
    }
    catch(err){
        next(err);
    }
};

exports.login = (req, res, next)=>{
    const {email, password} = req.body;
    try {
        
    } catch (error) {
        
    }
}