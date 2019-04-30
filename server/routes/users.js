const route = require("express").Router();
const authorization = require("../auth/auth.js");

const users = require("../controllers/userController.js");

// unrestricted routes
route.post("/Register", users.register);
route.post("/Login", users.login);


// restricted routes http://localhost:5055/api/users
route.get("/", authorization, users.getUsers);
route.get("/:id", authorization, users.getUser);
route.put("/:id", authorization, users.updateUser);
route.delete("/:id", authorization, users.deleteUser);

module.exports = route;