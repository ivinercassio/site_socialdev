import { ShowList } from '../components/show-list';
import { FriendRequestCard } from '../components/friend-request-card';
import { FriendCard } from '../components/friend-card';
import { SearchBar } from '../components/search-bar';
import { getAllFriendsByUserId, type FriendResponse } from '../models/Friend';
import { useEffect, useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { getAllRequestsByUserId, type FRequestResponse } from '../models/Request';

export function Friends() {
  const { user } = useUser();
  const [friends, setFriends] = useState<FriendResponse[]>([]);
  const [requests, setRequests] = useState<FRequestResponse[]>([]);
  
    useEffect(() => {
      async function loadData() {
        const allFriends = await getAllFriendsByUserId(user.id);
        setFriends(allFriends!);
        const allRequests = await getAllRequestsByUserId(user.id);
        setRequests(allRequests!);
      }
      loadData();
    }, [user]);

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
                items: requests.map(req => (
                  <FriendRequestCard key={req.id} data={req} />
                )),
              },
              {
                title: 'Friends',
                items: friends.map(friend => (
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