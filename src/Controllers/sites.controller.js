const mysqlconecion = require("../Databases/Db");

const getAllSites = (_, res) => {
  const sql = "SELECT * from sitios";
  try {
    mysqlconecion.query(sql, (err, rows, _) => {
      if (!err) {
        rows.length >= 1
          ? res.json(rows)
          : res.json({ message: "No hay sitios disponibles" });
      } else {
        return res.json({ msg: "Ocurrio un error", ok: false });
      }
    });
  } catch (error) {
    return res.json({ msg: "Ocurrio un error", ok: false });
  }
};

const createSite = (req, res) => {
  const {
    Nombre_sitio,
    Info_sitio,
    Ubicacion_sitio,
    Categoria_sitio,
    rate,
    Comentario,
    URL,
  } = req.body;
  const sql =
    "INSERT INTO sitios(Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL) VALUES(?,?,?,?,?,?,?)";
  try {
    mysqlconecion.query(
      sql,
      [
        Nombre_sitio,
        Info_sitio,
        Ubicacion_sitio,
        Categoria_sitio,
        rate,
        Comentario,
        URL,
      ],
      (err, rows, fields) => {
        if (!err) {
          return res.json({ Status: "Sitio Guardado" });
        } else {
          return res.json({ msg: "Ocurrio un error", ok: false });
        }
      }
    );
  } catch (error) {
    return res.json({ msg: "Ocurrio un error", ok: false });
  }
};

const deleteSite = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM sitios WHERE Id = ?";
  try {
    mysqlconecion.query(sql, [id], (err, rows, fields) => {
      if (!err) {
        return res.json({ Status: "Sitio Eliminado" });
      }
      return res.json({ msg: "Ocurrio un error", ok: false });
    });
  } catch (error) {
    return res.json({ msg: "Ocurrio un error", ok: false });
  }
};

const updateSite = (req, res) => {
  const {
    Nombre_sitio,
    Info_sitio,
    Ubicacion_sitio,
    Categoria_sitio,
    rate,
    Comentario,
    URL,
  } = req.body;
  const { id } = req.params;
  const sql =
    "UPDATE sitios SET Nombre_sitio = ?,Info_sitio = ?,Ubicacion_sitio = ?,Categoria_sitio = ?,rate = ?,Comentario = ?,URL = ? WHERE Id = ?";
  try {
    mysqlconecion.query(
      sql[
        (Nombre_sitio,
        Info_sitio,
        Ubicacion_sitio,
        Categoria_sitio,
        rate,
        Comentario,
        URL,
        id)
      ],
      (err, rows, fields) => {
        if (!err) {
          return res.json({ Status: "Sitio Actualizado" });
        } else {
          return res.json({ msg: "Ocurrio un error", ok: false });
        }
      }
    );
  } catch (error) {
    return res.json({ msg: "Ocurrio un error", ok: false });
  }
};

const getSiteByID = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * from sitios WHERE Id = ?";
  try {
    mysqlconecion.query(sql, [id], (err, rows, fields) => {
      if (!err) {
        rows.length === 1
          ? res.json(rows[0])
          : res.json({ message: "No hay sitios con este id" });
      } else {
        return res.json({ msg: "Ocurrio un error", ok: false });
      }
    });
  } catch (error) {
    return res.json({ msg: "Ocurrio un error", ok: false });
  }
};

const getPopularSites = (req, res) => {
  const sql = "SELECT * from sitios WHERE rate > 3";
  try {
    mysqlconecion.query(sql, (err, rows, fields) => {
      if (!err) {
        rows.length >= 1
          ? res.json(rows)
          : res.json({ message: "No hay sitios disponibles" });
      } else {
        return res.json({ msg: "Ocurrio un error", ok: false });
      }
    });
  } catch (error) {
    return res.json({ msg: "Ocurrio un error", ok: false });
  }
};

module.exports = {
  createSite,
  getAllSites,
  deleteSite,
  updateSite,
  getSiteByID,
  getPopularSites
};
