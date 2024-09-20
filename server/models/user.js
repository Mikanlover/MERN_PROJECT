import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'Please provide unique username'],
        unique: [true, 'Username already exists'],
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Please provide a password'],
        unique: false,
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please provide a email'],
        unique: true,
    },
    mobile: {
        type: Number,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    profile: {
        type: String,
        trim: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        default: "user"
    },
    gen_token: {
        type: Number,
        default: 0
    },
});

const User = mongoose.model('User', userSchema);

export default User;