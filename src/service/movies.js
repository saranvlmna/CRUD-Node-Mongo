const { movie } = require("../db")
module.exports = {

    createMovie: async (data) => {
        return await movie.create(data)
    },

    getMovies: async () => {
        return await movie.list()
    },

    updateMovie: async (id, data) => { 
        return await movie.update({ _id: id },data)
    },
    
    deleteMovie: async (id) => { 
        return await movie.delete({ _id: id })
    }
}