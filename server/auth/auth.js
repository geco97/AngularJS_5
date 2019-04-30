const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    try {
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
       const decoded = jwt.verify(token, "ecutbildning");
        req.userData = decoded;
        next();
    }
    catch {
        return res.status(401).json({ message: "Authorization failed." });
    }
}