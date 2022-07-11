const { StatusCodes } = require('http-status-codes')
const { userService } = require('../service');

module.exports = {
    
    signup: async (req, res, next) => {
        try {
            const user = await userService.signup(req.body);
            req.session.user = user
            return res.status(StatusCodes.OK).json({
                message: 'User created successfully',
                data: user
            });
        } catch (error) {
            next(error);
        }
    },

    login: async (req, res, next) => { 
        try {
            const user = await userService.login(req.body);
            req.session.user = user
            return res.status(StatusCodes.OK).json({
                message: 'User logged in successfully',
                data: user
            });
        } catch (error) {
            next(error);
        }
    }
}