import { SearchBar } from "../components/search-bar";
import { Feed } from "../components/feed";
import { getAllPosts } from "../models/Post";
import { useEffect, useState } from "react";

const mockPosts = [
  {
    id: "1",
    userdata: { username: "dev_junior" },
    postdata: { 
      id: "1",
      legend: "Construindo interfaces componentizadas com React e Tailwind CSS! 🚀", 
      createdAt: "15/07/2026", 
      likesCount: 250, 
      // commentsCount: 12, 
      tag: "reactjs" 
    },
    image_user: null,
    images_post: null
  },
  {
    id: "2",
    userdata: { username: "ui_designer" },
    postdata: { 
      id: "2",
      legend: "Seguindo fielmente os wireframes impressos e esboços de baixa fidelidade.", 
      createdAt: "16/07/2026", 
      likesCount: 184, 
      // commentsCount: 9, 
      tag: "wireframe" 
    },
    image_user: null,
    images_post: null
  }
];

export default function Home() {

  const [posts, setPosts] = useState<any[]>([]);

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