import Auth from "../models/auth.model.js"
import bcrypt from "crypto"

// Register 
exports.register = async (req, res, next)=>{
    const {fullname, email, password, role} = req.body;

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

exports.login = async (req, res, next)=>{
    const {email, password} = req.body;
    
    if(!email || !password){
        return res.status(400).json({
            success: false,
            error: "Please enter an email or password",
        })
    }

    try{
        const user = await Auth.findOne({email}).select("+password");

        if(!user){
            return res.status(401).json({
                success: false,
                error: "Invalid credentials",
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(401).json({
                success: false,
                error: "Invalid credentials"
            });
        }

        // const token = jwt.sign(
        //     { id: user._id, role:user.role},
        //     process.env.JWT_EXPIRES_IN_MS
        // )

        const option = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        };

        user.password = undefined;
        
        res.status(200).cookie("token", token, option).json({
            success: true,
            message:"Login successfully",
            accessToken: token,
            tokenType:"Bearer",
            data: user,
        });


    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
