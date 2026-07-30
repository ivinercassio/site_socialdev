import { AppSidebar } from "../components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { SearchBar } from "../components/search-bar";
import { Feed } from "../components/feed";

const mockPosts = [
  {
    id: "1",
    userdata: { username: "dev_junior", name: "Junior" },
    postdata: { 
      legend: "Construindo interfaces componentizadas com React e Tailwind CSS! 🚀", 
      createdAt: "15/07/2026", 
      likesCount: 250, 
      commentsCount: 12, 
      tag: "reactjs" 
    },
    image_user: null,
    images_post: null
  },
  {
    id: "2",
    userdata: { username: "ui_designer", name: "Sarah" },
    postdata: { 
      legend: "Seguindo fielmente os wireframes impressos e esboços de baixa fidelidade.", 
      createdAt: "16/07/2026", 
      likesCount: 184, 
      commentsCount: 9, 
      tag: "wireframe" 
    },
    image_user: null,
    images_post: null
  }
];

export default function Home() {
  return (
    <SidebarProvider className="text-neutral-800">
      <AppSidebar /> 

      {/* Fundo principal alterado para um cinza neutro bem claro (bg-neutral-100) */}
      <main className="w-full flex flex-col min-h-screen bg-neutral-100 text-neutral-800">
        
        {/* Cabeçalho superior com fundo cinza médio suave (bg-neutral-200) e bordas em cinza (border-neutral-300) */}
        <div className="flex items-center p-4 bg-neutral-200 border-b border-neutral-300 gap-4 w-full">
          <SidebarTrigger className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-300" /> 
          <div className="flex-grow">
            <SearchBar />
          </div>
        </div>

        {/* Área do Feed com scroll vertical */}
        <div className="flex-grow p-6 overflow-y-auto">
          <Feed posts={mockPosts} />
        </div>

      </main>
    </SidebarProvider>
  );
}
