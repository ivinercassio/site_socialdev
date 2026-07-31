import type { PostResponse } from '../models/Post';
import { PostCard } from './post-card'; 

export function Feed({ posts }: { posts: PostResponse[] }) {
  // Caso a lista de posts esteja vazia ou não tenha sido carregada ainda
  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-neutral-950 text-neutral-100 font-sans">
        <p className="text-base font-medium">Nothing posted yet</p>
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
