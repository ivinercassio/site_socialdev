import image_profile from "../assets/hero.png";

export function SearchBar() {
  return (
    <header className="flex items-center gap-3 w-full p-2.5 px-4 border-neutral-400 box-border">
      {/* Ícone de Perfil */}
      <div className="w-11 h-11 min-w-11 min-h-11 rounded-full border border-gray-400 overflow-hidden flex items-center justify-center bg-gray-50 shrink-0">
        <img 
          src={image_profile} 
          alt="image_profile" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Input de Pesquisa */}
      <input 
        type="text" 
        className="flex-grow h-8 px-3 bg-neutral-50 border border-neutral-400 font-sans text-sm outline-none" 
        placeholder="Search" 
      />

      {/* Botão de Login no canto direito */}
      <button className="h-8 px-4 border border-neutral-400 bg-neutral-50 font-sans text-sm font-medium hover:bg-neutral-300 text-neutral-800 transition-colors shrink-0">
        Login
      </button>
    </header>
  );
}
