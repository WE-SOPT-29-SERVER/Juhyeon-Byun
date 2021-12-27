const express = require("express");
const router = express.Router()

router.get("/", require("./postAllGET"));
router.get("/:id", require("./postOneGET"));
router.post("/", require("./postCreatePOST"));
router.put("/:id", require("./postUpdatePUT"));
router.delete("/:id", require("./postOneDELETE"));

module.exports = router;