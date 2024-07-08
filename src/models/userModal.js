import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        required:[true,'Please provide a username'],
        unique:true,
    },
    email:{
        required:[true,'Please provide a email'],
        unique:true,
    },
    password:{
        required:[true,'Please provide a password'],

    },
    isverfied:{
        default:false,
    },
    isAdmin:{
        default:false,
    },
    forgotPasswordToken,
    forgotPasswordTokenExpiry,
    verfiyToken,
    verifyTokenExpiry,
})


const User = mongoose.models.users || mongoose.model('users',userSchema);
export default User;