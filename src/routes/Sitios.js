const express = require("express");
const {
  getAllSites,
  createSite,
  deleteSite,
  updateSite,
  getSiteByID,
} = require("../Controllers/sites.controller");
const router = express.Router();

//ver
router.get("/sitios", getAllSites);
//guardar
router.post("/sitios", createSite);
//eliminar
router.delete("/sitios/delete/:id", deleteSite);
router.put("/sitios/:id", updateSite);
//buscar por id
router.get("/sitios/:id", getSiteByID);

module.exports = router;
