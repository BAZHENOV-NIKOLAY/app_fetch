const express = require("express");
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
//const bodyParser = require('body-parser');
//app.use(express.urlencoded({ extended: false }));

//app.use(express.json());
//app.use(express.json({type: ['application/json, text/plain']}));

//app.use(bodyParser.json());

app.options('*', cors());
app.post("/product", function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    
    res.statusCode = 200;
    console.log(typeof(req.query));
    //console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    //console.log(req);
    res.send("ok");
    
    //res.end(req.body);
    res.end();
});
app.listen(PORT, console.log(`сервер запущен по адресу http://localhost:${PORT}`));



