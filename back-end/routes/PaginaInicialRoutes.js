const express = require("express");
const router = express.Router();

router.get("./routes/PaginaInicialRoutes", (req, res) => {
  res.json({ mensagem: "Rota funcionando" });
});

module.exports = router;
