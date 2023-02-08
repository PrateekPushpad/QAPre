const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const dataBase = mongoose.connect('mongodb://127.0.0.1:27017/QApreneur')
.then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

const express = require("express");
const app = express();

var cors = require('cors')
app.use(cors())
app.options('*', cors());

// For user routes
const user_routes = require('./routes/userRoutes');
app.use('/', user_routes);

// ** CORS POLICY ENABLE **
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.listen(3000, function () {
    console.log("Server is running");
})

module.exports = { dataBase };