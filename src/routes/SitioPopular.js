const express = require("express");
const { getPopularSites } = require("../Controllers/sites.controller");
const router = express.Router();

router.get("/popular", getPopularSites);
module.exports = router;
