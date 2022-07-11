const express = require('express');
const controller = require('../controllers/user');
const user = new express.Router()

user.get('/login', controller.login);
user.post('/signup', controller.signup);

module.exports = user;