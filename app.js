require("dotenv").config();
const express = require("express");
const { port } = require("./config/env");

const app = express();

app.use(express.json());

const selicRoutes = require("./routes/selicRoutes");
app.use("/selic", selicRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
