const { Router } = require("express");
const {
  userApplication,
  deleteUserApplication,
} = require("../Controllers/user.controllers");

const userRouter = Router();

userRouter.post("/userApplication", userApplication);
userRouter.post("/deleteUserApplication", deleteUserApplication);

module.exports = userRouter;
