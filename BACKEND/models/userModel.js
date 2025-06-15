import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true, unique: true},
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;