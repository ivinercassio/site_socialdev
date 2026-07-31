import { SearchBar } from "../components/search-bar";
import { Feed } from "../components/feed";
import { AppProfile } from "../components/app-profile";
import { useParams } from "react-router-dom";
import { getAllPostsByUserId, type PostResponse } from "../models/Post";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../models/LoginDTO";

export default function Profile () {
  const { id } = useParams();
  const [posts, setPosts] = useState<PostResponse[]>([]);
  
    useEffect(() => {
    async function loadPosts() {
      let param = Number(id);
      if (!id) {
        const user = getCurrentUser();
        param = user?.id; 
      } 
      
      const data = await getAllPostsByUserId(param);
      
      // Garante que o estado sempre receba um array
      if (Array.isArray(data)) {
        setPosts(data);
      } else if (data) {
        setPosts([data]);
      } else {
        setPosts([]); 
      }
    }
    loadPosts();
  }, [id]); 

    
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="w-full">
        <SearchBar />
      </header>

      <section className="w-full">
        <AppProfile />
      </section>

      {/* Feed Principal */}
      <main className="flex-grow p-6 overflow-y-auto flex flex-col items-center">
        <Feed posts={posts} />
      </main> 
    </div>
  );
}