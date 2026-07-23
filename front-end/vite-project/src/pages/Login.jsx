import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Login.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [verSenha, setVerSenha] = useState(false); // ✅ dentro da função

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        setMensagem("sucesso");
        navigate("/pagina-inicial");
      } else {
        setMensagem(dados.mensagem || "Usuário ou senha inválidos");
      }
    } catch (erro) {
      setMensagem("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sistema ERP</h1>

        <p>Faça login para continuar</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <div className="senha-container">
            <input
              type={verSenha ? "text" : "password"}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              type="button"
              className="btn-ver-senha"
              onClick={() => setVerSenha(!verSenha)}
            >
              {verSenha ? "🙈" : "👁️"}
            </button>
          </div>

          <button type="submit">Entrar</button>
        </form>

        {mensagem && (
          <span className={mensagem.includes("sucesso") ? "sucesso" : "erro"}>
            {mensagem}
          </span>
        )}
      </div>
    </div>
  );
}

export default Login;
