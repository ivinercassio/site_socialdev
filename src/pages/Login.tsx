import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doLogin, type LoginRequest } from '../models/LoginDTO';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: LoginRequest = { username, password };
    console.log('Dados enviados:', data);
    const user = await doLogin(data);
  
    if (user) {
      navigate("/home");
    } else {
      console.error("Erro ao fazer login. Verifique as credenciais.");
    }
  };

  return (
    // Alterado o fundo para neutral-950 (quase preto) para o tema noturno
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 font-sans p-4 antialiased">
      
      {/* Card do Formulário:
          - bg-neutral-900: Fundo escuro levemente mais claro que o fundo da página.
          - border-neutral-800: Borda sutil.
          - rounded-2xl: Cantos bem arredondados e amigáveis.
          - shadow-2xl: Sombra projetada para dar profundidade no tema escuro.
      */}
      <div className="w-full max-w-md border border-neutral-800 bg-neutral-900 p-8 shadow-2xl rounded-2xl">
        
        {/* Cabeçalho do Card */}
        <div className="mb-10 text-center">
          {/* Texto principal em neutral-50 (quase branco) */}
          <h1 className="text-3xl font-bold text-neutral-50 tracking-tight">
            Sign in at <span className="text-neutral-400">SOCIAL.DEV</span>
          </h1>
          {/* Texto secundário em neutral-400 */}
          <p className="text-sm text-neutral-400 mt-2">Sign in. Connect. Socialize</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Campo Username */}
          <div className="flex flex-col gap-2">
            {/* Label em neutral-300 */}
            <label htmlFor="username" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider px-1">
              Username
            </label>
            {/* Input:
                - bg-neutral-800: Fundo do input mais escuro que o card.
                - border-neutral-700: Borda sutil.
                - rounded-xl: Cantos arredondados no input.
                - text-neutral-100: Cor do texto digitado.
                - focus:ring: Adicionado um anel de foco sutil para acessibilidade.
            */}
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-12 px-4 bg-neutral-800 border border-neutral-700 font-sans text-sm text-neutral-100 placeholder:text-neutral-500 rounded-xl outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
              placeholder="Enter your username"
            />
          </div>

          {/* Campo Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider px-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 px-4 bg-neutral-800 border border-neutral-700 font-sans text-sm text-neutral-100 placeholder:text-neutral-500 rounded-xl outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
              placeholder="••••••••"
            />
          </div>

          {/* Botão de Envio:
              - bg-neutral-50: Botão claro para contrastar no tema escuro.
              - text-neutral-950: Texto escuro no botão claro.
              - rounded-xl: Cantos arredondados.
              - hover/active: Ajustes sutis de cor.
          */}
          <button
            type="submit"
            className="h-12 mt-3 bg-neutral-50 text-neutral-950 font-semibold text-sm rounded-xl hover:bg-neutral-200 active:bg-neutral-300 transition-colors shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Link para Criar Conta */}
        <div className="mt-8 text-center text-sm text-neutral-400">
          Don't have an account?{' '}
          {/* Cores de link ajustadas para o tema escuro */}
          <a href="#" className="font-semibold text-neutral-200 hover:text-neutral-50 underline decoration-neutral-600 hover:decoration-neutral-50 transition-colors">
            Sign up
          </a >
        </div>

      </div>
    </div>
  );
}