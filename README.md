# Frontend do Site SOCIAL.DEV

## Estrutura do projeto

src/
├── assets/         # Imagens, SVGs globais e fontes
├── components/     # Componentes reutilizáveis globais
│   └── ui/         # Componentes baixados automaticamente do shadcn (Ex: button.tsx)
├── lib/            # Funções utilitárias (como o cn do shadcn/ui)
│
├── models/         # 📁 Adicione aqui (Tipagens e Interfaces de dados - Ex: user.ts, product.ts)
├── pages/          # 📁 Adicione aqui (As telas/páginas completas da aplicação - Ex: Home.tsx)
│
├── App.css
├── App.tsx         # Onde você irá configurar as rotas chamando as suas 'pages'
├── index.css
└── main.tsx

### React + TypeScript + Vite