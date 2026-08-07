import { useEffect, useState } from "react";
import { CommentCard } from "../components/comment-card";
import { PostCard } from "../components/post-card";
import { SearchBar } from "../components/search-bar";
import { ShowList } from "../components/show-list";
import { useParams } from "react-router-dom";
import { getAllCommentsByPostId, type CommentResponse } from "../models/Comment";
import { getPostById, type PostResponse } from "../models/Post";

export function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState<CommentResponse[]>([]);
  const [posts, setPosts] = useState<PostResponse[]>([]);

  useEffect(() => {
    async function loadComments() {
      const response = await getAllCommentsByPostId(id!);
      setComments(response!);
      const getPost = await getPostById(id!);
      let array: PostResponse[] = [];
      array.push(getPost!);
      setPosts(array);
    } 
    loadComments();
  }, [id]);

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
            Read the Comments
          </h1>

          {/* Componente Genérico exibindo Múltiplos Tipos de Cards */}
          <ShowList
            sections={[
              {
                title: '',
                items: posts.map(post => (
                  <div key={post?.id} className="flex justify-center w-full">
                    <div className="w-full max-w-2xl">
                      <PostCard post={post} />
                    </div>
                  </div>
                )),
              },
              {
                title: 'Comments',
                items: comments.map(comment => (
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