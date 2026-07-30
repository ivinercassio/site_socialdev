import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <Routes>
      {/* Redireciona a raiz "/" para "/home" */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/myprofile" element={<Profile />} />
      
      {/* Rota para página não encontrada (404) */}
      <Route path="*" element={<div className="p-8">Página não encontrada.</div>} />
    </Routes>
  )
}
