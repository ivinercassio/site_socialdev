import { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerTrigger, DrawerClose } from "./ui/drawer";
import { User as UserIcon, Users, Eye, LogOut, Code2, X, HomeIcon, AlertCircleIcon } from "lucide-react";
import { chageVisibility } from "../models/User";
import { useNavigate } from "react-router-dom";
import { ChangeVisibilityModal } from "./change-visibility-modal";
import { useEffect, useState } from "react";
import { getMideaProfile, type Midea } from "../models/Midea";
import { useUser } from "../contexts/UserContext"; 

interface AppDrawerProps {
  children?: React.ReactNode;
}

export function AppDrawer({ children }: AppDrawerProps) {
  const navigate = useNavigate();
  const { user, updateUserVisibility, logout } = useUser(); 
  const [imageProfile, setImageProfile] = useState<Midea>();

<<<<<<< HEAD
  const handleVisibilityChange = async (newVisibility: boolean) => {
    if (!user) return;
    const updatedVisibility = await chageVisibility(user.id, newVisibility);
    if (updatedVisibility !== undefined) {
      updateUserVisibility(updatedVisibility!);
    }
=======
  const handleVisibilityChange = async (newVisibility: boolean, password: string) => {
    const visible = await chageVisibility(user_data,  newVisibility, password);
    setIsPublicProfile(visible!);
    setIsPublicProfile(newVisibility);
    console.log("Nova visibilidade salva no servidor:", visible);
>>>>>>> 5df45e26ec9623212b7dddd6d651e38a041e3f3d
  };

  function handleLogout() {
    logout();
    navigate("/login");
  }

  useEffect(() => {
    async function loadMideaProfile() {
      if (user?.id) {
        const data = await getMideaProfile(user.id);
        setImageProfile(data!);
      }
    }
    loadMideaProfile();
  }, [user?.id]);

  if (!user) return null;

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        {children || (
<<<<<<< HEAD
          <button
            title="Abrir Menu"
=======
          <button 
            title="Open Menu"
>>>>>>> 5df45e26ec9623212b7dddd6d651e38a041e3f3d
            className="w-10 h-10 rounded-full border border-neutral-700 overflow-hidden flex items-center justify-center bg-neutral-800 cursor-pointer hover:border-neutral-400 hover:scale-105 transition-all outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <img
              src={imageProfile?.link}
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </button>
        )}
      </DrawerTrigger>

      <DrawerContent className="bg-neutral-900 text-neutral-100 border-r border-neutral-800 w-72 h-full fixed inset-y-0 left-0 outline-none flex flex-col justify-between p-0">
        <div className="flex flex-col">
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
                src={imageProfile?.link}
                alt="User profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-neutral-100 text-base font-semibold tracking-wide">
              {`@${user?.username}`}
            </span>
          </DrawerHeader>

          <nav className="px-3 py-4 flex flex-col gap-1.5">
            <button
              className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium"
              onClick={() => navigate("/home")}
            >
              <HomeIcon className="w-4 h-4 text-neutral-400" />
              <span>Home Page</span>
            </button>

            <button
              className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium"
              onClick={() => navigate("/myprofile")}
            >
              <UserIcon className="w-4 h-4 text-neutral-400" />
              <span>My Profile</span>
            </button>

            <button
              className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium"
              onClick={() => navigate("/myfriends")}
            >
              <Users className="w-4 h-4 text-neutral-400" />
              <span>My Friends</span>
            </button>

            {user.type === "CLIENT" ? (
              <ChangeVisibilityModal
                isPublic={user.public}
                onConfirm={handleVisibilityChange}
                trigger={
                  <button className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 rounded-md flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>Change Profile Visibility</span>
                  </button>
                }
              />
            ) : (
              <div>
                <button
                  className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium"
                  onClick={() => navigate("/reports")}
                >
                  <AlertCircleIcon className="w-4 h-4 text-neutral-400" />
                  <span>See Reports</span>
                </button>

                <button
                  className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all font-medium"
                  disabled={true}
                >
                  <Eye className="w-4 h-4 text-neutral-400" />
                  <span>Visibility: Private</span>
                </button>
              </div>
            )}
          </nav>
        </div>

        <DrawerFooter className="px-3 pb-6 flex flex-col gap-4 border-t border-neutral-800 pt-4 bg-neutral-900">
          <button
            className="w-full h-11 px-4 flex items-center justify-start gap-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors font-medium"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 text-red-400" />
            <span>Logout</span>
          </button>

          <div className="flex justify-center items-center">
            <div className="flex items-center gap-2 border border-neutral-700 px-5 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 tracking-wider text-xs uppercase font-semibold">
              <Code2 className="w-4 h-4 text-neutral-200" />
              <span onClick={() => navigate("/home")}>Social.DEV</span>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}