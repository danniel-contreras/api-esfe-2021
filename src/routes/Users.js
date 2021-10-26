const express = require("express");
const {
  saveUser,
  getAllUsers,
  deleteUsers,
  updateUser,
  getUser,
} = require("../Controllers/users.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("principal");
});
//ingresar datos
router.post("/usuarios", saveUser);
//ver datos
router.get("/usuarios", getAllUsers);
//buscar por id
router.get("/usuarios/:id", getUser);
//eliminar
router.delete("/usuarios/delete/:id", deleteUsers);
//Actuaizar

router.put("/usuarios/:id", updateUser);
module.exports = router;
