import { PostCard } from './post-card'; 

// const postsExemplo = [
//   {
//     userdata: { username: "joaosilva", name: "João" },
//     postdata: { id: "1", legend: "Minha primeira publicação!", createdAt: "29/07/2026", likesCount: 340, commentsCount: 22, tag: "tech" },
//     image_user: { url: "https://link-da-foto.com" },
//     images_post: [{ url: "https://link-da-foto.com" }]
//   }
// ];


export function Feed({ posts }: { posts: any[] }) {
  // Caso a lista de posts esteja vazia ou não tenha sido carregada ainda
  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 border border-dashed border-black bg-gray-50 text-gray-500 font-sans">
        <p className="text-base font-medium">Nenhum post encontrado no feed.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
      {posts.map((post) => (
        <PostCard
          key={post.id} // Certifique-se de usar uma chave única para cada item
          userdata={post.userdata}
          postdata={post.postdata}
          image_user={post.image_user}
          images_post={post.images_post}
        />
      ))}
    </div>
  );
}
