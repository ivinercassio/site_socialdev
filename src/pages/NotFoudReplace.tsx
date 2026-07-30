import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFoundRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
      // 1. Exibe o alerta para o usuário
      alert("Página não encontrada. Redirecionando...");
      
      // 2. Executa o redirecionamento para a página inicial
      navigate("/", { replace: true });
  }, [navigate]);

  // Retorna null ou uma tela visual simples de carregamento
  return null; 
}
