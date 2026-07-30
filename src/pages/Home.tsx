import { SearchBar } from "../components/search-bar";
import { Feed } from "../components/feed";
import { getAllPosts, type PostResponse } from "../models/Post";
import { useEffect, useState } from "react";

export default function Home() {

  const [posts, setPosts] = useState<PostResponse[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await getAllPosts();
      setPosts(data!); 
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
        <Feed posts={posts} />
      </main>
    </div>
  );
}