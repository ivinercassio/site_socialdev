import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import image_profile from "../assets/hero.png";
import type { User } from "../models/User";

export function AppSidebar() {
  const user_data: User = JSON.parse(localStorage.getItem("user_data")!);

  return (
    <Sidebar className="border-r border-gray-300 bg-white h-screen flex flex-col justify-between w-64 text-sm font-medium">
      
      {/* Header: Foto e Username */}
      <SidebarHeader className="border-b border-gray-300 py-6 flex flex-col items-center justify-center gap-2">
        <div className="w-20 h-20 rounded-full border border-gray-400 overflow-hidden flex items-center justify-center bg-gray-50">
          <img 
            src={image_profile} 
            alt="image_profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-gray-700 text-base font-normal">
          {user_data ? `@${user_data.username}` : "@username"}
        </span>
      </SidebarHeader>

      {/* Content: Links de Navegação */}
      <SidebarContent className="flex-1 py-0">
        <SidebarGroup className="p-0 flex flex-col">
          <SidebarMenuButton className="w-full py-3 px-4 text-center border-b border-gray-300 rounded-none hover:bg-gray-100 transition-colors">
            My Profile
          </SidebarMenuButton>
          <SidebarMenuButton className="w-full py-3 px-4 text-center border-b border-gray-300 rounded-none hover:bg-gray-100 transition-colors">
            My Friends
          </SidebarMenuButton>
          <SidebarMenuButton className="w-full py-3 px-4 text-center border-b border-gray-300 rounded-none hover:bg-gray-100 transition-colors">
            Change Visibility
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer: Logout e Ícone do App */}
      <SidebarFooter className="p-0 flex flex-col">
        <SidebarMenu className="w-full">
          <SidebarMenuItem className="w-full">
            <SidebarMenuButton className="w-full py-3 px-4 text-center border-t border-b border-gray-300 rounded-none hover:bg-gray-100 text-red-600 transition-colors font-semibold">
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        {/* Espaço do App Icon no fundo */}
        <div className="py-6 flex justify-center items-center">
          <div className="border border-gray-400 px-6 py-2 bg-white text-gray-600 tracking-wide text-xs uppercase font-semibold">
            App Icon
          </div>
        </div>
      </SidebarFooter>

    </Sidebar>
  );
}
