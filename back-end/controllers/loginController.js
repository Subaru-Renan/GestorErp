// Importe a sua conexão com o banco de dados (ajuste o caminho conforme seu projeto)
const db = require("../db/conexao");

exports.login = async (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "Usuário e senha são obrigatórios.",
    });
  }

  // Consulta SQL para buscar o usuário e a senha correspondentes
  const query = "SELECT * FROM usuarios WHERE usuario = ? AND senha = ?";

  db.query(query, [usuario, senha], (err, results) => {
    if (err) {
      console.error("Erro no banco de dados:", err);
      return res.status(500).json({
        sucesso: false,
        mensagem: "Erro interno no servidor.",
      });
    }

    // Se o banco retornar alguma linha, significa que a credencial está correta
    if (results.length > 0) {
      return res.status(200).json({
        sucesso: true,
        mensagem: "Login realizado com sucesso!",
        usuario: results[0], // Opcional: envia os dados do usuário logado (menos a senha)
      });
    } else {
      // Se não encontrar nenhuma linha correspondente
      return res.status(401).json({
        sucesso: false,
        mensagem: "Usuário ou senha incorretos.",
      });
    }
  });
};
