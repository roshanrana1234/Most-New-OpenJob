import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerSchema = new mongoose.Schema({

    phonenumber: {
        type: Number,
        required: true,
        unique: true
    },

    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },


 


})

registerSchema.pre('save', async function (next) {
    console.log("hii pre");
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.confrimPassword = await bcrypt.hash(this.password, 12)
    }
    next();
})




const UserSingup = mongoose.model('UserSingup', registerSchema)


export default UserSingup;