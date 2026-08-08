// interface RequestFriendCardProps {
//   avatarUrl?: string
//   username?: string
//   requestDate?: string
//   isPublic?: boolean
//   onVisitProfile?: () => void
//   onAcceptFriendship?: () => void
// }

  // const requestsData = [
  //   { id: '1', username: 'john_doe', date: '23/05/2026', isPublic: true },
  // ];

import { useNavigate } from "react-router-dom";
import type { FRequestResponse } from "../models/Request";
import { useEffect, useState } from "react";
import { getUserById, type User } from "../models/User";
import { getMideaProfileUserById, type Midea } from "../models/Midea";
import { useUser } from "../contexts/UserContext";

export function FriendRequestCard({ data }: { data: FRequestResponse }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const [userFromRequest, setUserFromRequest] = useState<User>();
  const [image, setImage] = useState<Midea>();
  
  useEffect(() => {
    async function loadData() {
      let param;
      data.user_one === user?.id ? param = data.user_two : param = data.user_one;
      const response = await getUserById(param);
      setUserFromRequest(response!);
      const midea = await getMideaProfileUserById(param);
      setImage(midea!); 
    }
    loadData();
  }, []);
  
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-22 h-22 sm:w-22 sm:h-22 rounded-full border border-neutral-700 flex-shrink-0 flex items-center justify-center overflow-hidden bg-neutral-800">
          {image?.link ? (
            <img 
              src={image.link} 
              alt={userFromRequest?.username} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <span className="text-neutral-500 text-xs">image_profile</span>
          )}
        </div>

        {/* Informações */}
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-zinc-100">@{userFromRequest?.username}</span>
          <span className="text-sm text-zinc-400">
            Friendship request sent at {new Date(data.date_request).toLocaleDateString('pt-BR')}
          </span>
          
          {/* Ações */}
          <div className="flex gap-2 mt-2">
            <button className="px-4 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors border border-zinc-700" 
            onClick={() => navigate(`/profile/${userFromRequest?.id}`)}>
              Visit Profile
            </button>
            <button className="px-4 py-1.5 text-sm bg-zinc-800 hover:bg-neutral-800 hover:text-green-400 hover:border-green-900/50 text-zinc-200 rounded-lg transition-colors border border-zinc-700">
              Accept Friendship
            </button>
          </div>
        </div>
      </div>

      {/* Badge de Visibilidade */}
      <span className="text-xs text-zinc-400 self-start bg-zinc-800/60 px-2.5 py-1 rounded-full border border-zinc-800">
        {userFromRequest?.public ? 'Public Profile' : 'Private Profile'}
      </span>
    </div>
  );
}