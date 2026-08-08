import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button' 
import type { FriendResponse } from '../models/Friend';
import { useEffect, useState } from 'react';
import { getUserById, type User } from '../models/User';
import { getMideaProfileUserById, type Midea } from '../models/Midea';
import { useUser } from '../contexts/UserContext';

export function FriendCard({ data }: { data: FriendResponse }) {

  const navigate = useNavigate();
  const { user } = useUser();
  const [userFriend, setUserFriend] = useState<User>();
  const [image, setImage] = useState<Midea>();

  useEffect(() => {
    async function loadUserFriend() {
      let param;
      data.friend_one === user?.id ? param = data.friend_two : param = data.friend_one;
      const response = await getUserById(param);
      setUserFriend(response!);
    }
    loadUserFriend();
  }, []);

  useEffect(() => {
    async function loadMideaProfile() {
      const data = await getMideaProfileUserById(userFriend!.id);
      setImage(data!); 
    }
    loadMideaProfile();
  }, [userFriend]);

  function handleUnfollow () {
    console.log(`Amizade desfeita com o usuário: ${userFriend?.username}`);
  }
  
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        
        {/* Avatar de Perfil */}
        <div className="w-22 h-22 sm:w-22 sm:h-22 rounded-full border border-neutral-700 flex-shrink-0 flex items-center justify-center overflow-hidden bg-neutral-800">
          {image?.link ? (
            <img 
              src={image.link} 
              alt={userFriend?.username} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <span className="text-neutral-500 text-xs">image_profile</span>
          )}
        </div>

        {/* Informações e Ações */}
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-zinc-100">@{userFriend?.username}</span>

          {/* Data de Amizade */}
          <div>
            <p className="text-xs sm:text-sm text-neutral-400">
              Friends since {new Date(data.date_start).toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Grupo de Botões de Ação */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Button
              variant="outline"
              onClick={() => navigate(`/profile/${userFriend?.id}`)}
              className="px-4 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors border border-zinc-700"
            >
              Visit Profile
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate(`/chat/${userFriend?.id}`)}
              className="px-4 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors border border-zinc-700"
            >
              Chat
            </Button>

            <Button
              variant="outline"
              onClick={handleUnfollow}
              className="px-4 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors border border-zinc-700 hover:bg-neutral-800 hover:text-red-400 hover:border-red-900/50"
            >
              Unfollow
            </Button>
          </div>

        </div>

      </div>
      {/* Badge de Visibilidade */}
      <span className="text-xs text-zinc-400 self-start bg-zinc-800/60 px-2.5 py-1 rounded-full border border-zinc-800">
        {userFriend?.public ? 'Public Profile' : 'Private Profile'}
      </span>
    </div>
  );
}