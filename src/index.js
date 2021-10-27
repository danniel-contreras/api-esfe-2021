const express = require("express");
const app = express();
const SitioRouter = require("./routes/Sitios.js");
const UsersRouter = require("./routes/Users.js");
const SitiosPRouter = require("./routes/SitioPopular.js");
const cors = require("cors");

//Configuacion del server
app.set("port", process.env.PORT || 3080);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
//middleware del server

app.use(SitioRouter);
app.use(UsersRouter);
app.use(SitiosPRouter);

//lazamiento del server

app.listen(app.get("port"), () => {
  console.log("this running in", app.get("port"));
});
