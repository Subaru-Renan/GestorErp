const express = require("express");
const cors = require("cors"); // Importe o cors
const app = express();

app.use(cors()); // Isso permite que o React acesse o Node
app.use(express.json());
app.use(express.json({ strict: false }));

const loginRoutes = require("./routes/loginRoutes");
const AlmoxarifadoRoutes = require("./routes/PaginaInicialRoutes");

app.use(express.json());

// Aqui você ativa as rotas
app.use(loginRoutes);
app.use(AlmoxarifadoRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
