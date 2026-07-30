import { AppSidebar } from "../components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { SearchBar } from "../components/search-bar"; // Certifique-se de ajustar o caminho correto do arquivo

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar /> 
      <main className="w-full flex flex-col">
        {/* Cabeçalho superior alinhando o botão do menu e a barra de pesquisa */}
        <div className="flex items-center p-4 border-b border-gray-100 gap-4">
          <SidebarTrigger /> 
          <div className="flex-grow">
            <SearchBar />
          </div>
        </div>

        {/* Conteúdo principal da página */}
        <div className="p-6">
          {/* Seus componentes ou textos da página Home entram aqui */}
        </div>
      </main>
    </SidebarProvider>
  )
}
