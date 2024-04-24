const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.Controller");

router.post("/users",userController.creatUser);

router.put("/users/:id", userController.updetUser);

router.get("/users", userController.allUser);

module.exports = router;