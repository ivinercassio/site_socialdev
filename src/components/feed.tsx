import { useEffect, useState } from 'react';
import type { PostResponse } from '../models/Post';
import { getUserById, type User } from '../models/User';
import { PostCard } from './post-card'; 
import { useParams } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

export function Feed({ posts }: { posts: PostResponse[] }) {
  const { id } = useParams();
  const { user } = useUser();
  const [userAuthor, setUserAuthor] = useState<User | null>(null);
    
    useEffect(() => {
      async function loadUserAuthor() {
        if (Number(id) != user!.id) {
          const data = await getUserById(Number(id));
          setUserAuthor(data!); 
        } else {
          setUserAuthor(user);
        }
      }
      loadUserAuthor();
    }, []);

  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-neutral-950 text-neutral-100 font-sans">
        <p className="text-base font-medium">Nothing posted yet</p>
      </div>
    );
  } else if (userAuthor != null && !userAuthor.public) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-neutral-950 text-neutral-100 font-sans">
        <p className="text-base font-medium">This profile is private</p>
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
