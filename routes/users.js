const express = require("express");
const router = express.Router();
const userController = require("../controllers/users_controller");
const passport = require("passport");

router.get("/profile", passport.checkAuthentication, userController.profile);
router.get("/sign-up", userController.signUp);
router.get("/sign-in", userController.signIn);
router.post("/create", userController.create);
// using passport as a middleware
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/sign-in" }),
  userController.createSession
);
router.get("/sign-out", userController.destroySession);

module.exports = router;
