import { Heart, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ReportModal } from './report-modal';
import { markPostAsLiked, type PostResponse } from '../models/Post';
import { getAllMideasByPostId, getMideaProfileUserById } from '../models/Midea';
import { useEffect, useState } from 'react';
import type { Midea } from '../models/Midea';
import type { Tag } from '../models/Tag';
import { getAllTagsByPostId } from '../models/PostTag';

export function PostCard({ post }: { post: PostResponse }) {

  const navigate = useNavigate();
  const [imageUser, setImageUser] = useState<Midea>();
  const [imagesPost, setImagesPost] = useState<Midea[]>([]);
  const [tagsPost, setTagsPost] = useState<Tag[]>([]);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = async () => {
    let cont = 0;
    (liked) ? cont = 1 : cont = 2;
    const data = await markPostAsLiked(post.id, cont);
    if (data) {
      setLiked(!liked);
      post.like += cont;
    }
  };
  
  useEffect(() => {
    async function loadProfileById() {
      const data = await getMideaProfileUserById(post.author);
      setImageUser(data!); 
    }
    loadProfileById();
  }, []);

  useEffect(() => {
    async function loadMidasPost() {
      const data = await getAllMideasByPostId(post.id);
      setImagesPost(data!); 
    }
    loadMidasPost();
  }, []);

  useEffect(() => {
    async function loadTagsPost() {
      const data = await getAllTagsByPostId(post.id);
      setTagsPost(data!); 
    }
    loadTagsPost();
  }, []);

  return (
    <article className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl font-sans text-sm overflow-hidden shadow-xl">
      
      {/* 1. Cabeçalho do Post - Unificado e Limpo */}
      <header className="flex items-center justify-between p-4 bg-neutral-900">
        <div className="flex items-center gap-3">
          {/* Foto/Ícone de Perfil */}
          <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center overflow-hidden bg-neutral-800 shrink-0">
            {imageUser?.link ? (
              <img src={imageUser?.link} alt={post.author_username} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs font-medium text-neutral-400">User</span>
            )}
          </div>
          {/* @username */}
          <span className="font-semibold text-neutral-100"
          onClick={() => navigate(`/profile/${post.author}`)}>
            @{post.author_username}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Data de Publicação */}
          <time className="text-neutral-400 text-xs">
            {new Date(post.date_published).toLocaleDateString('pt-BR')}
          </time>
          {/* Botão + Follow - Estilo Dark Button */}
          <button className="px-4 py-1.5 rounded-full font-semibold bg-neutral-100 text-neutral-950 hover:bg-neutral-300 transition-colors">
            + Follow
          </button>
        </div>
      </header>

      {/* 2. Corpo do Post (Legenda e Mídia) */}
      <div className="px-4 pb-4 flex flex-col gap-4">
        {/* Legenda */}
        <p className="text-neutral-100 break-words font-bold leading-relaxed">
          {post.title}
        </p>

        {/* Legenda */}
        <p className="text-neutral-100 break-words leading-relaxed">
          {post.legend}
        </p>

        {/* Container de Imagem / Vídeo - Arredondado e Escuro */}
        <div className="w-full aspect-video rounded-xl border border-neutral-700 flex items-center justify-center bg-neutral-800 overflow-hidden">
          {imagesPost && imagesPost.length > 0 ? (
            <img 
              src={imagesPost[0].link} 
              alt="Conteúdo do post" 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-neutral-500 font-medium tracking-wider uppercase">
              IMAGE / VIDEO
            </span>
          )}
        </div>
      </div>

      {/* 3. Rodapé (Interações e Report) - Limpo e Integrado */}
      <footer className="flex items-center justify-between p-4 bg-neutral-900">
        {/* Lado Esquerdo: Likes, Comentários e Tags */}
        <div className="flex items-center gap-5 text-neutral-100">
          {/* Likes */}
          {liked ? 
          <button className="flex items-center gap-1.5 text-red-400 transition-colors group"
          onClick={handleLike}>
            <Heart className="w-5 h-5 stroke-[1.5] fill-red-400 transition-colors" />
            <span className="font-medium">{post.like ?? 250}</span>
          </button>
          : <button className="flex items-center gap-1.5 hover:text-red-400 transition-colors group"
          onClick={handleLike}>
            <Heart className="w-5 h-5 stroke-[1.5] group-hover:fill-red-400 transition-colors" />
            <span className="font-medium">{post.like ?? 250}</span>
          </button>}

          {/* Comentários */}
          <button className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          onClick={() => navigate(`/comments/${post.id}`)}>
            <MessageCircle className="w-5 h-5 stroke-[1.5]" />
            {/* <span className="font-medium">{postdata?.commentsCount ?? 12}</span> */}
          </button>

          {/* Hashtag */}
          <span className="text-neutral-400 font-medium">
            {tagsPost.map((tag, index) => (
              <span key={index} className='ms-1'>
                #{tag.theme}
              </span>
            ))}
          </span>
        </div>

        {/* Lado Direito: Botão Report - Sutil */}
        <ReportModal
          type="post"
          onConfirm={(reason) => {
            console.log("Comentário denunciado! Motivo:", reason)
          }}
          trigger={
            <button className="px-3 py-1 text-xs font-medium text-neutral-400 rounded-md border border-neutral-700 hover:bg-red-950/50 hover:text-red-400 hover:border-red-400 transition-colors">
              Report
            </button>
          }
        />
      </footer>

    </article>
  );
}