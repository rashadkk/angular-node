const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema ({
    username: String,
    password: String,
    u_name: String,
    u_role: String,
})

module.exports = mongoose.model('user', userSchema);