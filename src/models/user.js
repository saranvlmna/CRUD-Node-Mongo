const { email } = require('convict-format-with-validator')
const { Schema, model } = require('mongoose')
const schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
    }
})

module.exports = model("User", schema)