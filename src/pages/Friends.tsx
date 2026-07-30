import { ShowList } from '../components/show-list';
import { RequestFriendCard } from '../components/request-friend-card';
import { FriendCard } from '../components/friend-card';
import { SearchBar } from '../components/search-bar';

export function Friends() {
  const requestsData = [
    { id: '1', username: 'john_doe', date: '23/05/2026', isPublic: true },
  ];

  const friendsData = [
    { id: '2', username: 'alice', friendsSince: '16/04/2026', isPublic: false },
    { id: '3', username: 'bob', friendsSince: '16/04/2026', isPublic: false },
  ];

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col">

      {/* Cabeçalho */}
      <header className="w-full">
        <SearchBar />
      </header>
      
      <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl font-bold mb-8 text-zinc-50 border-b border-zinc-800 pb-4">
            Manage your Connetions
          </h1>
          
          <ShowList
            sections={[
              {
                title: 'Requests Friendship',
                items: requestsData.map(req => (
                  <RequestFriendCard key={req.id} data={req} />
                )),
              },
              {
                title: 'Friends',
                items: friendsData.map(friend => (
                  <FriendCard key={friend.id} data={friend} />
                )),
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}