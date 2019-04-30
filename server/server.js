const http = require('http');
const db = require("mongoose");
const app = require('./app');
const port = process.env.SERVER_PORT || 5055;

// WEB SERVER
http.createServer(app).listen(port, function() {
    console.log(`WEB SERVER online on port ${port}.`);
})
// MONGO DB
console.log(process.env.MONGODB);
console.log(process.env.SERVER_PORT);
db.connect("mongodb://localhost:27017/Inlamning5", { useNewUrlParser: true })
.then(function() { console.log("MongoDB online on port 27017") })
.catch(function(err) { console.log(err) });


db.set("useCreateIndex", true);
