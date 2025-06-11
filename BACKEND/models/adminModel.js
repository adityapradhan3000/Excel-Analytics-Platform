import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true}
})

const adminModel = mongoose.models.admin || mongoose.model('admin', userSchema);

export default adminModel;