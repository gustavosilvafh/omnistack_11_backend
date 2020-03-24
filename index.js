const express = require('express');

const app = express();

app.get('/contato', function(req, res){
       return res.json({
           user: "Gustavo Silva",
           curso: "Omnistack 11",
       });
})


app.listen(3333);