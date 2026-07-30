import { Heart, MessageCircle } from 'lucide-react';

export function PostComponent({ userdata, postdata, image_user, images_post }) {
  return (
    <article className="w-full max-w-2xl border border-neutral-400 bg-neutral-50 font-sans text-sm mb-6">
      
      {/* 1. Cabeçalho do Post */}
      <header className="flex items-center justify-between p-3 border-b border-neutral-400 bg-neutral-200">
        <div className="flex items-center gap-3">
          {/* Foto/Ícone de Perfil */}
          <div className="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center overflow-hidden bg-gray-50 shrink-0">
            {image_user?.url ? (
              <img src={image_user.url} alt={userdata?.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs font-medium">User</span>
            )}
          </div>
          {/* @username */}
          <span className="font-semibold text-black">
            @{userdata?.username || 'username'}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Data de Publicação */}
          <time className="text-gray-600 text-xs">
            {postdata?.createdAt || '15/07/2026'}
          </time>
          {/* Botão + Follow */}
          <button className="border border-neutral-400 px-3 py-1 font-medium bg-gray-50 hover:bg-gray-200 transition-colors">
            + Follow
          </button>
        </div>
      </header>

      {/* 2. Corpo do Post (Legenda e Mídia) */}
      <div className="p-3 flex flex-col gap-3">
        {/* Legenda */}
        <p className="text-black break-words leading-relaxed">
          {postdata?.legend || 'Legend...Legend...Legend....Legend...'}
        </p>

        {/* Container de Imagem / Vídeo */}
        <div className="w-full aspect-video border border-neutral-400 flex items-center justify-center bg-neutral-200 overflow-hidden">
          {images_post && images_post.length > 0 ? (
            <img 
              src={images_post[0].url} 
              alt="Conteúdo do post" 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 font-medium tracking-wider uppercase">
              IMAGE / VIDEO
            </span>
          )}
        </div>
      </div>

      {/* 3. Rodapé (Interações e Report) */}
      <footer className="flex items-center justify-between p-3 border-t border-neutral-400">
        {/* Lado Esquerdo: Likes, Comentários e Tags */}
        <div className="flex items-center gap-4 text-black">
          {/* Likes */}
          <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5 stroke-[1.5]" />
            <span className="font-medium">{postdata?.likesCount ?? 250}</span>
          </button>

          {/* Comentários */}
          <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-5 h-5 stroke-[1.5]" />
            <span className="font-medium">{postdata?.commentsCount ?? 12}</span>
          </button>

          {/* Hashtag */}
          <span className="text-gray-600 font-medium">
            {postdata?.tag ? `#${postdata.tag}` : '#tag'}
          </span>
        </div>

        {/* Lado Direito: Botão Report */}
        <button className="border border-neutral-400 px-3 py-0.5 text-xs font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-colors">
          Report
        </button>
      </footer>

    </article>
  );
}
