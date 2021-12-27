const express = require("express");
const router = express.Router();

/**
 * [GET]
 * api/users/login
 */
router.get("/login", (req, res) => {
  const result = {
    status: 200,
    msg: "route: api/users/login",
  };
  res.status(200).send(result);
});

/**
 * [GET]
 * api/users/signup
 */
router.get("/signup", (req, res) => {
  const result = {
    status: 200,
    msg: "route: api/users/signup",
  };
  res.status(200).send(result);
});

module.exports = router;