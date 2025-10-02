import mongoose from "mongoose";


export default authSchema = new mongoose.Schema(
    {
        fullname:{
            type: String,
            required: [true, "Please provide a username"],
            unique: true,
            trim: true,
            minlength: 3,
        },
        email:{
            type: String,
            required: [true, "Please provide an email"],
            unique: true,
            trim: true,
            lowercase: true,
        },
        phone:{
            type: Number,
            required: false,
            minlength: 10,
        },
        password:{
            type: String,
            required:[true, "Please provide a password"],
            minlength: 6,
            select: false,
        },
        confirmPassword:{
            type: String,
            required:[true, "Please provide a confirmation password"],
            minlength: 6,
            select: false
        },
        role:{
            type: String,
            enum: ["user", "admin"],
            default: ["user"],
        },
        isVarified:{
            type: Boolean,
            default: false,
        },
        resetPasswordToken: String,
        resetPasswordExpires: Date,
    },
    { timestamps: true }
);

const Auth = mongoose.model("auth", authSchema)
// module.exports = Auth;