import { PostCard } from './post-card'; 

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
          key={post.id} 
          post={post}
        />
      ))}
    </div>
  );
}
