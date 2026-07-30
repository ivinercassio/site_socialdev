import { useEffect, useState } from "react";
import type { Midea } from "../models/Midea";
import { getUserById, type User } from "../models/User";
import { getAllFriendsByUserId, } from "../models/Friend";
import { useParams } from "react-router-dom";
import { getCurrentUser } from "../models/LoginDTO";

export function AppProfile() {
  const { id } = useParams();
  const [imageUser, setImageUser] = useState<Midea>();
  const [user, setUser] = useState<User>();
  const [friends, setFriends] = useState<number>();
  
  useEffect(() => {
    async function loadMideaProfile() {
      // const data = await getMideaProfile(post.author.id);
      // setImageUser(data!); 
    }
    loadMideaProfile();
  }, []);
  
  useEffect(() => {
    async function loadUserData() {
      if (!id) 
        setUser(getCurrentUser());
      else {
        const data = await getUserById(Number(id));
        setUser(data!);
      }
    }
    loadUserData();
  }, []);

  useEffect(() => {
    async function loadFriends() {
      let param = Number(id);
      if (!id) {
        const user = getCurrentUser();
        param = user.id;
      } 
      const data = await getAllFriendsByUserId(param);
      setFriends(data!.length);
    }
    loadFriends();
  }, []);

  return (
    // Container Principal: Ajustado para fundo escuro e bordas sutis
    <div className="w-full max-w-2xl mx-auto p-6 bg-neutral-900 border border-neutral-700 rounded-lg font-sans shadow-xl mt-5">
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        
        {/* Lado Esquerdo: Avatar e Username */}
        <div className="flex flex-col items-center gap-3 min-w-[120px] mx-auto sm:mx-0">
          
          {/* Círculo do Avatar: Mantido com borda branca para contraste */}
          <div className="w-28 h-28 rounded-full border border-white flex items-center justify-center overflow-hidden bg-neutral-800">
            {imageUser?.link ? (
              <img 
                src={imageUser.link} 
                alt={user?.username} 
                className="w-full h-full object-cover" 
              />
            ) : (
              // Espaço reservado se não houver imagem
              <span className="text-neutral-500 text-xs">Sem Foto</span>
            )}
          </div>
          
          {/* Username: Alterado para branco puro */}
          <span className="text-base font-medium tracking-wide text-white">
            {user?.username}
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
              {user?.about}
            </p>
          </div>

          {/* Seção Amigos: Texto para cinza claro */}
          <div className="text-sm text-neutral-300">
            <span>Friends: </span>
            {/* Número: Alterado para branco para destaque */}
            <span className="font-semibold text-white">{friends}</span>
          </div>

          {/* Rodapé: Status do Perfil e Data: Texto para cinza claro */}
          <div className="text-xs pt-2 text-neutral-400 flex items-center gap-2">
            <span>{user?.public ? 'Public Profile' : 'Private Profile'}</span>
            <span className="text-neutral-600">|</span>
            <span>Joined us at {new Date(user?.creation_date!).toLocaleDateString('pt-BR')}</span>
          </div>

        </div>

      </div>
    </div>
  );
}