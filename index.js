const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('esta es la respuesta de express');
});

app.listen(5000);
console.log("Server on port 5000");
