const mysqlconnection = require("../Databases/Db");
const Promise = require("bluebird");

const saveUser = (req, res) => {
  const { Nombre, Apellido, Email, Clave } = req.body;
  const sql =
    "INSERT INTO usuarios(Nombre,Apellido,Email,Clave) values(?,?,?,?)";
  try {
    mysqlconnection.query(
      sql,
      [Nombre, Apellido, Email, Clave],
      (err, rows, fields) => {
        if (!err) {
          return res.json({ msg: "Se guardo el usuario", ok: true });
        } else {
          return res.json({ msg: "Ocurrio un error", ok: false });
        }
      }
    );
  } catch (error) {
    return res.json({ msg: "Ocurrio un error", ok: false });
  }
};

const getAllUsers = (req, res) => {
  let queryAsync = Promise.promisify(
    mysqlconnection.query.bind(mysqlconnection)
  );
  let numRows;
  const numPerPage = Number(req.query.npp) || 1;
  const page = Number(req.query.page) || 1;
  const Nombre = req.query.name || "";
  const Apellido = req.query.last || "";
  let numPages;
  let skip = (page - 1) * numPerPage;
  // Here we compute the LIMIT parameter for MySQL query
  var limit = skip + "," + numPerPage;
  queryAsync(
    `SELECT count(*) as numRows FROM usuarios WHERE Nombre LIKE "%${Nombre}%" AND Apellido LIKE "%${Apellido}%"`
  )
    .then(function (results) {
      numRows = results[0].numRows;
      numPages = Math.ceil(numRows / numPerPage);
    })
    .then(() =>
      queryAsync(
        `SELECT * FROM usuarios WHERE Nombre LIKE "%${Nombre}%" AND Apellido LIKE "%${Apellido}%" ORDER BY ID DESC LIMIT ${limit}`
      )
    )
    .then(function (results) {
      var responsePayload = {
        users: results, 
      };
      if (page <= numPages) {
        responsePayload.pagination = {
          totalItems: results.length,
          totalPages: numPages,
          currentPage: page,
          prevPage: page <= 1 ? page : page - 1,
          nextPage: page >= numPages ? page : page + 1,
          take: numPerPage,
        };
      } else
        responsePayload.pagination = {
          err:
            "queried page " +
            page +
            " is >= to maximum page number " +
            numPages,
        };
      res.json(responsePayload);
    })
    .catch(function (err) {
      console.error(err);
      res.json({ err: err });
    });
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
