import { CommentCard } from "../components/comment-card";
import { PostCard } from "../components/post-card";
import { SearchBar } from "../components/search-bar";
import { ShowList } from "../components/show-list";

export function Report () {
    const commentsData = [
    {
      id: 'c1',
      username: 'carol_v',
      content: 'Comment... Comment... Comment... Comment... Comment... Comment... Comment... Comment....',
    },
    {
      id: 'c2',
      username: 'dev_marcos',
      content: 'Excelente projeto! O layout e a arquitetura dos componentes ficaram sensacionais.',
    },
  ];

  const postData = [
  {
    id: "1",
    userdata: { username: "dev_junior", name: "Junior" },
    postdata: { 
      id: "1",
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
      id: "2",
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
  
    return (
        <div className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col">
          {/* Cabeçalho */}
          <header className="w-full">
            <SearchBar />
          </header>
          
          <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12 flex justify-center">
            <div className="w-full max-w-4xl">
              {/* Título da Página */}
              <h1 className="text-2xl font-bold mb-8 text-zinc-50 border-b border-zinc-800 pb-4">
                Reported Items
              </h1>
    
              {/* Componente Genérico exibindo Múltiplos Tipos de Cards */}
              <ShowList
                sections={[
                  {
                    title: 'Reported Posts',
                    items: postData.map(post => (
                      <div key={post.id} className="flex justify-center w-full">
                        <div className="w-full max-w-2xl">
                          <PostCard
                            userdata={post.userdata}
                            postdata={post.postdata}
                            image_user={post.image_user}
                            images_post={post.images_post}
                          />
                        </div>
                      </div>
                    )),
                  },
                  {
                    title: 'Reported Comments',
                    items: commentsData.map(comment => (
                      <CommentCard key={comment.id} data={comment} />
                    )),
                  },
                ]}
              />
            </div>
          </main>
        </div>
      );
}