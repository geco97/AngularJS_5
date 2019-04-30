const bodyParser = require("body-parser");
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

// http://localhost:port/api/products
const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

// BODY Parser - enable to send data though POST BODY
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTES
const userRoute = require("./routes/users.js");
app.use("/api/users", userRoute);

module.exports = app; 