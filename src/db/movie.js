const { Movies } = require('../models')
module.exports = {

    create: async (data) => {
        const movie = await Movies.create(data)
        return {
            data: movie
        }
    },

    list: async () => {
        const movies = await Movies.find()
        return {
            data: movies
        }
    },

    update: async (id, data) => {
        const movie = await Movies.findOneAndUpdate(id, {
            $set: data
        }, { new: true })
        return {
            data: movie
        }
    },
    
    delete: async (id) => {
        const movie = await Movies.findOneAndDelete(id)
        return {
            data: movie
        }
    }
}