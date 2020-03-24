const express = require('express');

const routes = express.Router();

routes.get('/', function(req, res){
    return res.json({
        user: "Gustavo Silva",
        curso: "Omnistack 11",
    });
})


module.exports = routes;