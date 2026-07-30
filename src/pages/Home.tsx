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
    <SidebarProvider className="bg-neutral-950 text-neutral-100 min-h-screen">
      <AppSidebar /> 

      {/* Fundo principal em dark mode neutro (bg-neutral-950) */}
      <main className="w-full flex flex-col min-h-screen bg-neutral-950 text-neutral-100">
        
        {/* Cabeçalho superior padronizado em bg-neutral-900 e border-neutral-800 */}
        <div className="flex items-center px-4 bg-neutral-900 border-b border-neutral-800 gap-2 w-full">
          <SidebarTrigger className="text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-colors" /> 
          <div className="flex-grow">
            <SearchBar />
          </div>
        </div>

        {/* Área do Feed com scroll e centralização dos posts */}
        <div className="flex-grow p-6 overflow-y-auto flex flex-col items-center">
          <Feed posts={mockPosts} />
        </div>

      </main>
    </SidebarProvider>
  );
}