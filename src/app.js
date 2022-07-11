const express = require('express');
const session = require('express-session');
const { dbConfig } = require('./config');
const { movies,user }=require('./routes');  

const app = express();

dbConfig();

app.use(session({ secret: 'movieApp', cookie: { maxAge: 600000 } }));
app.use(express.json());
app.use('/', movies)
app.use('/user',user)
module.exports = {app}