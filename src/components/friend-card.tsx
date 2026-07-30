import { Button } from '../components/ui/button' 

// interface FriendCardProps {
//   avatarUrl?: string
//   username?: string
//   friendsSince?: string
//   isPrivate?: boolean
//   onVisitProfile?: () => void
//   onChat?: () => void
//   onUnfollow?: () => void
// }

export function FriendCard({ data }: { data: any }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        
        {/* Avatar de Perfil */}
        <div className="w-22 h-22 sm:w-22 sm:h-22 rounded-full border border-neutral-700 flex-shrink-0 flex items-center justify-center overflow-hidden bg-neutral-800">
          {data.avatarUrl ? (
            <img 
              src={data.avatarUrl} 
              alt={data.username} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <span className="text-neutral-500 text-xs">image_profile</span>
          )}
        </div>

        {/* Informações e Ações */}
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-zinc-100">@{data.username}</span>

          {/* Data de Amizade */}
          <div>
            <p className="text-xs sm:text-sm text-neutral-400">
              Friends since {data.friendsSince}
            </p>
          </div>

          {/* Grupo de Botões de Ação */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Button
              variant="outline"
              onClick={data.onVisitProfile}
              className="px-4 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors border border-zinc-700"
            >
              Visit Profile
            </Button>

            <Button
              variant="outline"
              onClick={data.onChat}
              className="px-4 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors border border-zinc-700"
            >
              Chat
            </Button>

            <Button
              variant="outline"
              onClick={data.onUnfollow}
              className="px-4 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors border border-zinc-700 hover:bg-neutral-800 hover:text-red-400 hover:border-red-900/50"
            >
              Unfollow
            </Button>
          </div>

        </div>

      </div>
      {/* Badge de Visibilidade */}
      <span className="text-xs text-zinc-400 self-start bg-zinc-800/60 px-2.5 py-1 rounded-full border border-zinc-800">
        {data.isPrivate ? 'Public Profile' : 'Private Profile'}
      </span>
    </div>
  );
}