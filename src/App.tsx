import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { Friends } from "./pages/Friends"
import { Comments } from "./pages/Comments"
import { NotFoundRedirect } from "./pages/NotFoudReplace"
import { Report } from "./pages/Reports"

export default function App() {
  return (
    <Routes>
      {/* Redireciona a raiz "/" para "/home" */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/myprofile" element={<Profile />} />
      <Route path="/myfriends" element={<Friends />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/comments/:id" element={<Comments />} />
      <Route path="/reports" element={<Report />} />
      
      {/* Rota para página não encontrada (404) */}
      <Route path="*" element={<NotFoundRedirect />} />
    </Routes>
  )
}
