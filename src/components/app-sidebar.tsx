import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem 
} from "./ui/sidebar";
import { User as UserIcon, Users, Eye, LogOut, Code2 } from "lucide-react";
import image_profile from "../assets/hero.png";
import type { User } from "../models/User";

export function AppSidebar() {
  let user_data: User | null = null;
  try {
    const stored = localStorage.getItem("user_data");
    if (stored) user_data = JSON.parse(stored);
  } catch {
    user_data = null;
  }

  return (
    <Sidebar 
      variant="sidebar" 
      className="dark border-r border-neutral-800 bg-neutral-900 text-neutral-100 h-screen flex flex-col justify-between w-64 text-sm font-medium [data-sidebar=sidebar]:bg-neutral-900"
      style={{ backgroundColor: '#171717', color: '#f5f5f5' }}
    >
      {/* 1. Header: Foto e Username */}
      <SidebarHeader className="border-b border-neutral-800 py-6 flex flex-col items-center justify-center gap-3 bg-neutral-900">
        <div className="w-20 h-20 rounded-full border-2 border-neutral-700 p-0.5 overflow-hidden flex items-center justify-center bg-neutral-800 shadow-md shrink-0">
          <img 
            src={image_profile} 
            alt="User profile" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="text-neutral-100 text-base font-semibold tracking-wide">
          {user_data?.username ? `@${user_data.username}` : "@username"}
        </span>
      </SidebarHeader>

      {/* 2. Content: Links de Navegação */}
      <SidebarContent className="flex-1 px-3 py-4 bg-neutral-900">
        <SidebarGroup className="p-0 flex flex-col gap-1.5">
          
          <SidebarMenuButton className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium">
            <UserIcon className="w-4 h-4 text-neutral-400" />
            <span>My Profile</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium">
            <Users className="w-4 h-4 text-neutral-400" />
            <span>My Friends</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium">
            <Eye className="w-4 h-4 text-neutral-400" />
            <span>Change Visibility</span>
          </SidebarMenuButton>

        </SidebarGroup>
      </SidebarContent>

      {/* 3. Footer: Logout e App Icon */}
      <SidebarFooter className="px-3 pb-6 flex flex-col gap-4 border-t border-neutral-800 pt-4 bg-neutral-900">
        <SidebarMenu className="w-full">
          <SidebarMenuItem className="w-full">
            <SidebarMenuButton className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors font-medium">
              <LogOut className="w-4 h-4 text-red-400" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        {/* Container da Marca */}
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-2 border border-neutral-700 px-5 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 tracking-wider text-xs uppercase font-semibold">
            <Code2 className="w-4 h-4 text-neutral-200" />
            <span>Social.DEV</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}