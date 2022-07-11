const { Schema, model } = require('mongoose')
const schema = new Schema({
    name: {
        type: String,
    },
    rating: {
        type: Number,
    },
    cast: {
        type: Array,
    },
    genre: {
        type: String,
    },
    relesedate: {
        type: Date,
    }
})

module.exports = model("Movies",schema)