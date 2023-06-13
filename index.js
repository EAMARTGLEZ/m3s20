const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const ruoteProducts = require("./routes/productos.routes");
const routeUsers = require("./routes/user.routes");
const { db } = require("./database/config");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api v1.0 con mongoose");
});
// cargar rutas
app.use(ruoteProducts);
app.use(routeUsers);
(async () => {
  await db();
  app.listen(process.env.PORT, () => {
    console.log(`La aplicion esta corriendo en el puerto: ${process.env.PORT}`);
  });
})();
