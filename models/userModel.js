const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['admin', 'teacher', 'student'], default: 'student'},
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;