// Definição de tipos para as props (opcional, mas recomendado)
interface AppProfileProps {
  avatarUrl?: string; // URL para a imagem real
  username?: string;
  aboutText?: string;
  friendsCount?: number;
  isPublic?: boolean;
  joinedDate?: string;
}

export function AppProfile({
  avatarUrl,
  username = '@username',
  aboutText = 'TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT',
  friendsCount = 65,
  isPublic = true,
  joinedDate = '11/05/2019',
}: AppProfileProps) {
  
  // -- PALETA DE CORES AJUSTADA PARA DARK MODE (baseada na image_1.png) --
  // Fundo do card: bg-neutral-900 (cinza muito escuro, similar ao post card)
  // Bordas: border-neutral-700 (cinza médio, visível contra o fundo)
  // Texto Principal (Username, Títulos): text-white (branco puro)
  // Texto Secundário (About, Info): text-neutral-300 (cinza claro para leitura)
  // Círculo do Avatar: border-white (como na imagem original)

  return (
    // Container Principal: Ajustado para fundo escuro e bordas sutis
    <div className="w-full max-w-2xl mx-auto p-6 bg-neutral-900 border border-neutral-700 rounded-lg font-sans shadow-xl mt-5">
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        
        {/* Lado Esquerdo: Avatar e Username */}
        <div className="flex flex-col items-center gap-3 min-w-[120px] mx-auto sm:mx-0">
          
          {/* Círculo do Avatar: Mantido com borda branca para contraste */}
          <div className="w-28 h-28 rounded-full border border-white flex items-center justify-center overflow-hidden bg-neutral-800">
            {avatarUrl ? (
              <img 
                src={avatarUrl} 
                alt={username} 
                className="w-full h-full object-cover" 
              />
            ) : (
              // Espaço reservado se não houver imagem
              <span className="text-neutral-500 text-xs">Sem Foto</span>
            )}
          </div>
          
          {/* Username: Alterado para branco puro */}
          <span className="text-base font-medium tracking-wide text-white">
            {username}
          </span>
        </div>

        {/* Lado Direito: Informações do Perfil */}
        <div className="flex-1 flex flex-col justify-between self-stretch space-y-4">
          
          {/* Seção About */}
          <div className="space-y-1">
            {/* Título: Alterado para branco puro */}
            <h3 className="text-base font-semibold text-white">About</h3>
            {/* Texto: Alterado para cinza claro */}
            <p className="text-sm tracking-wide leading-relaxed uppercase break-words text-neutral-300">
              {aboutText}
            </p>
          </div>

          {/* Seção Amigos: Texto para cinza claro */}
          <div className="text-sm text-neutral-300">
            <span>Friends: </span>
            {/* Número: Alterado para branco para destaque */}
            <span className="font-semibold text-white">{friendsCount}</span>
          </div>

          {/* Rodapé: Status do Perfil e Data: Texto para cinza claro */}
          <div className="text-xs pt-2 text-neutral-400 flex items-center gap-2">
            <span>{isPublic ? 'Public Profile' : 'Private Profile'}</span>
            <span className="text-neutral-600">|</span>
            <span>Joined us at {joinedDate}</span>
          </div>

        </div>

      </div>
    </div>
  );
}