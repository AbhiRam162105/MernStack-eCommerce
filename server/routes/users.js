const express = require("express");
const router = express.Router();
const {
  Login,
  Register,
  Logout,
  validateToken,
} = require("../controllers/authentication");

// Auth route
router.get("/", (req, res) => {
  res.send("Auth route");
});
router.post("/login", Login);
router.post("/validate", validateToken);
router.post("/register", Register);
router.post("/logout", Logout);

module.exports = router;
