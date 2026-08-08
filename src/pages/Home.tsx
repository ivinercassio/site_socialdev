import { SearchBar } from "../components/search-bar";
import { Feed } from "../components/feed";
import { getAllFriendsPosts, getAllPosts, type PostResponse } from "../models/Post";
import { useEffect, useState } from "react";

export default function Home() {

  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [friendsPosts, setFriendsPosts] = useState<PostResponse[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const friendsPosts = await getAllFriendsPosts();
      const allPosts = await getAllPosts();
      let ids = new Set<number>(friendsPosts?.map(friend => friend.id));
      let array = allPosts?.filter(post => !ids.has(post.id));
      setPosts(array!); 
      setFriendsPosts(friendsPosts!); 
    }
    loadPosts();
  }, []);

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="w-full">
        <SearchBar />
      </header>

      {/* Feed Principal */}
      <main className="flex-grow p-6 overflow-y-auto flex flex-col items-center">
        {friendsPosts && friendsPosts.length > 0 && (
          <Feed posts={friendsPosts} friends={true} />
        )}
        {posts && posts.length > 0 && (
          <Feed posts={posts} friends={false} />
        )}
      </main>
    </div>
  );
}