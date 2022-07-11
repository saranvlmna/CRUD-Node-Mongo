const { User } = require('../models');

module.exports = {

    create: async (data) => {
        const user = await User.create(data)
        return {
            data: user
        }
    },
    
    findOne: async (data) => { 
        const user = await User.findOne(data)
        return {
            data: user
        }
    }
}