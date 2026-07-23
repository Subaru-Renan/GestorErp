const mysql = require("mysql2");

// Cria a conexão com o banco de dados
const conexao = mysql.createConnection({
  host: "localhost",
  user: "root", // Seu usuário do MySQL (geralmente root)
  password: "", // Coloque aqui a senha do seu MySQL Workbench
  database: "erp_transjobes", // Nome do banco que aparece na sua primeira imagem
});

// Testa a conexão
conexao.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.stack);
    return;
  }
  console.log("Conectado ao banco de dados com sucesso!");
});

module.exports = conexao;
