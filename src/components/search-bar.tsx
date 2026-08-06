import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { AppDrawer } from "./app-drawer";
import { useUser } from "../contexts/UserContext";

export function SearchBar() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <header className="flex items-center justify-between gap-4 w-full p-3 px-4 bg-neutral-900 border-b border-neutral-800 box-border text-neutral-100">
      
      {/* 1. O Drawer é acionado ao clicar na Foto do Perfil */}
      {user !== null ? <AppDrawer /> : <div></div>}

      {/* 2. Input de Pesquisa */}
      <div className="flex-grow max-w-2xl relative flex items-center">
        <Search className="w-4 h-4 absolute left-3.5 text-neutral-400 pointer-events-none" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full h-10 pl-10 pr-4 bg-neutral-800/80 border border-neutral-700/80 rounded-xl font-sans text-sm text-neutral-100 placeholder:text-neutral-500 outline-none transition-all focus:bg-neutral-800 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" 
        />
      </div>

      {/* 3. Botão de Login */}
      {user === null? 
      <button 
        onClick={() => navigate("/login")}
        className="h-9 px-5 rounded-full bg-neutral-100 text-neutral-950 font-sans text-sm font-semibold hover:bg-neutral-300 transition-colors shrink-0 shadow-sm"
      >
        Login
      </button> : <div></div>}

    </header>
  );
}