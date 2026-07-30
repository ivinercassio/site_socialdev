import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import image_profile from "../assets/hero.png";

export function SearchBar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <header className="flex items-center justify-between gap-4 w-full p-3 px-6 bg-neutral-900 border-b border-neutral-800 box-border text-neutral-100">
      
      {/* 1. Perfil / Avatar */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-10 h-10 rounded-full border border-neutral-700 overflow-hidden flex items-center justify-center bg-neutral-800 cursor-pointer hover:border-neutral-500 transition-colors">
          <img 
            src={image_profile} 
            alt="User profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2. Input de Pesquisa com Ícone */}
      <div className="flex-grow max-w-2xl relative flex items-center">
        <Search className="w-4 h-4 absolute left-3.5 text-neutral-400 pointer-events-none" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full h-10 pl-10 pr-4 bg-neutral-800/80 border border-neutral-700/80 rounded-xl font-sans text-sm text-neutral-100 placeholder:text-neutral-500 outline-none transition-all focus:bg-neutral-800 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" 
        />
      </div>

      {/* 3. Botão de Login */}
      <button 
        onClick={handleClick}
        className="h-9 px-5 rounded-full bg-neutral-100 text-neutral-950 font-sans text-sm font-semibold hover:bg-neutral-300 transition-colors shrink-0 shadow-sm"
      >
        Login
      </button>

    </header>
  );
}