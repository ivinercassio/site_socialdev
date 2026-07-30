import image_profile from "../assets/hero.png";

export function SearchBar() {
  return (
    <header className="flex items-center gap-3 w-full p-2.5 px-4 border-gray-300 box-border">
      {/* Ícone de Perfil */}
      <div className="flex items-center justify-center w-11 height-11 min-w-11 min-h-11 rounded-full text-xs font-sans">
        <img 
            src={image_profile} 
            alt="image_profile" 
            className="w-full h-full object-cover"
        />
      </div>

      {/* Input de Pesquisa */}
      <input 
        type="text" 
        className="flex-grow h-8 px-3 border font-sans text-sm outline-none" 
        placeholder="Search" 
      />
    </header>
  );
}
