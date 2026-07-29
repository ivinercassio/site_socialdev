// src/App.tsx
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
// import Login from "@/pages/Login" <-- Quando criar outras páginas, importe aqui

export default function App() {
  return (
    <Routes>
      {/* Rota principal da aplicação (raiz "/") */}
      <Route path="/" element={<Home />} />

      {/* Exemplo de como adicionar novas rotas no futuro: */}
      {/* <Route path="/login" element={<Login />} /> */}
      
      {/* Rota para página não encontrada (404) */}
      <Route path="*" element={<div className="p-8">Página não encontrada.</div>} />
    </Routes>
  )
}
