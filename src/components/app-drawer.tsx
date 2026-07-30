import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTrigger,
  DrawerClose,
} from "./ui/drawer";
import { User as UserIcon, Users, Eye, LogOut, Code2, X } from "lucide-react";
import image_profile from "../assets/hero.png";
import type { User } from "../models/User";

interface AppDrawerProps {
  children?: React.ReactNode;
}

export function AppDrawer({ children }: AppDrawerProps) {
  let user_data: User | null = null;
  try {
    const stored = localStorage.getItem("user_data");
    if (stored) user_data = JSON.parse(stored);
  } catch {
    user_data = null;
  }

  return (
    <Drawer direction="left">
      {/* 1. O Trigger pode encapsular o Avatar ou ser renderizado externamente */}
      <DrawerTrigger asChild>
        {children || (
          <button 
            title="Abrir Menu"
            className="w-10 h-10 rounded-full border border-neutral-700 overflow-hidden flex items-center justify-center bg-neutral-800 cursor-pointer hover:border-neutral-400 hover:scale-105 transition-all outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <img 
              src={image_profile} 
              alt="User profile" 
              className="w-full h-full object-cover"
            />
          </button>
        )}
      </DrawerTrigger>

      {/* 2. Conteúdo do Drawer vindo da Esquerda */}
      <DrawerContent className="bg-neutral-900 text-neutral-100 border-r border-neutral-800 w-72 h-full fixed inset-y-0 left-0 outline-none flex flex-col justify-between p-0">
        
        <div className="flex flex-col">
          {/* Header com foto, nome e botão de fechar */}
          <DrawerHeader className="border-b border-neutral-800 py-6 flex flex-col items-center justify-center gap-3 relative bg-neutral-900">
            <DrawerClose asChild>
              <button 
                title="Fechar Menu"
                className="absolute top-3 right-3 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </DrawerClose>

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
          </DrawerHeader>

          {/* Links de Navegação */}
          <nav className="px-3 py-4 flex flex-col gap-1.5">
            <button className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium">
              <UserIcon className="w-4 h-4 text-neutral-400" />
              <span>My Profile</span>
            </button>

            <button className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium">
              <Users className="w-4 h-4 text-neutral-400" />
              <span>My Friends</span>
            </button>

            <button className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium">
              <Eye className="w-4 h-4 text-neutral-400" />
              <span>Change Visibility</span>
            </button>
          </nav>
        </div>

        {/* Footer com Logout e Marca */}
        <DrawerFooter className="px-3 pb-6 flex flex-col gap-4 border-t border-neutral-800 pt-4 bg-neutral-900">
          <button className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors font-medium">
            <LogOut className="w-4 h-4 text-red-400" />
            <span>Logout</span>
          </button>
          
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-2 border border-neutral-700 px-5 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 tracking-wider text-xs uppercase font-semibold">
              <Code2 className="w-4 h-4 text-neutral-200" />
              <span>Social.DEV</span>
            </div>
          </div>
        </DrawerFooter>

      </DrawerContent>
    </Drawer>
  );
}