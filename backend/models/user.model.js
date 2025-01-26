import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    phone_number: {
        type: Number,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
