const express = require('express')

const router = require('./router')

const server = express();

server.use('/api/recipes', router);

server.use((err,req,res,next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message
    })
})

module.exports = server;