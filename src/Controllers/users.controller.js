const mysqlconnection = require("../Databases/Db");

const saveUser = (req, res) => {
  const { Nombre, Apellido, Email, Clave } = req.body;
  const sql =
    "INSERT INTO usuarios(Nombre,Apellido,Email,Clave) values(?,?,?,?)";
  mysqlconnection.query(
    sql,
    [Nombre, Apellido, Email, Clave],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: "Usuario saved" });
      } else {
        console.log(err);
      }
    }
  );
};

const getAllUsers = (_, res) => {
  const sql = "select * from usuarios";
  try {
    mysqlconnection.query(sql, (err, rows, fields) => {
      if (!err) {
        rows.length >= 1
          ? res.json(rows)
          : res.json({ message: "No hay usuarios disponibles" });
      } else {
        return res.json({ msg: "Ocurrio un error", ok: false });
      }
    });
  } catch (error) {
    return res.json({ msg: "Ocurrio un error", ok: false });
  }
};

const deleteUsers = (req, res) => {
  const { id } = req.params;
  const sql = "delete from usuarios where id = ?";
  mysqlconnection.query(sql, [id], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: "usuario deleted" });
    } else {
      console.log(err);
    }
  });
};

const updateUser = (req, res) => {
  const { Nombre, Apellido, Email, Clave } = req.body;
  const { id } = req.params;

  const sql =
    "update usuarios set Nombre = ?,Apellido = ?,Email = ?,Clave = ? where id = ?";
  mysqlconnection.query(
    sql,
    [Nombre, Apellido, Email, Clave, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: "Employees Updated" });
      } else {
        console.log(err);
      }
    }
  );
};

const getUser = (req, res) => {
  const { id } = req.params;
  const sql = "select * from usuarios where id = ?";
  try {
    mysqlconnection.query(sql, [id], (err, rows, fields) => {
      if (!err) {
        rows.length === 1
          ? res.json(rows[0])
          : res.json({ message: "No hay usuarios con este id" });
      } else {
        return res.json({ msg: "Ocurrio un error", ok: false });
      }
    });
  } catch (error) {
    return res.json({ msg: "Ocurrio un error", ok: false });
  }
};
module.exports = { saveUser, getAllUsers, updateUser, deleteUsers, getUser };
