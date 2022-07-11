const { StatusCodes } = require('http-status-codes')
const { movieService } = require('../service');
module.exports = {
    
    createMovie: async (req, res, next) => {
        try {
            const result = await movieService.createMovie(req.body);
            return res.status(StatusCodes.OK).json({
                message: 'Movie created successfully',
                data: result
            })
        } catch (error) {
            next(error)
        }
    },

    getMovies: async (req, res, next) => {
        try {
            const movies = await movieService.getMovies();
            return res.status(StatusCodes.OK).json({
                message: "Movies fetched successfully",
                data: movies,
            })
        } catch (error) {
            next(error)
        }
    },

    updateMovie: async (req, res, next) => {
        try {
            if (req.session.user) {
                const result = await movieService.updateMovie(req.params.id, req.body);
                return res.status(StatusCodes.OK).json({
                    message: 'Movie updated successfully',
                    data: result
                })
            }
            else {
                throw new Error("User not logged in ")
            }
        } catch (error) {
            next(error)
        }
    },

    deleteMovie: async (req, res,next) => {
        try {
            if (req.session.user) {
                const result = await movieService.deleteMovie(req.params.id);
                return res.status(StatusCodes.OK).json({
                    message: 'Movie deleted successfully',
                    data: result
                })
            }
            else {
                throw new Error("User not logged in ")
            }
        } catch (error) {
            next(error)
        }
    }
}