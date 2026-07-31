"use client";

import { useState } from "react";
import { comments, getUserById } from "@/lib/data";
import type { Comment } from "@/types";
import { Avatar } from "@/components/ui/Avatar";
import {
  IconHeart,
  IconMoreVertical,
  IconPen,
  IconReply,
  IconSend,
  IconThumbsUp,
  IconTrash,
} from "@/components/ui/icons";

function CommentItem({
  comment,
  onReply,
  onDelete,
  isReply = false,
}: {
  comment: Comment;
  onReply: (author: string) => void;
  onDelete: (id: string) => void;
  isReply?: boolean;
}) {
  const author = getUserById(comment.authorId);
  const [liked, setLiked] = useState(false);

  return (
    <div className={`flex gap-3 ${isReply ? "pl-6" : ""}`}>
      <Avatar name={author.name} gradient={author.gradient} size="sm" />
      <div className="min-w-0 flex-1">
        <div className="rounded-box border border-base-300/70 bg-base-100 p-3.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold">{author.name}</p>
              <span className="text-xs text-base-content/50">
                {comment.createdAt}
              </span>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs">
                <IconMoreVertical size={15} />
              </div>
              <ul className="dropdown-content menu z-20 mt-1 w-36 rounded-box border border-base-300 bg-base-100 p-1 shadow-xl">
                <li>
                  <button type="button">
                    <IconPen size={15} />
                    Editar
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onDelete(comment.id)}
                    className="text-error"
                  >
                    <IconTrash size={15} />
                    Eliminar
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed">{comment.content}</p>
          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              className={`inline-flex items-center gap-1 text-xs font-medium ${
                liked ? "text-primary" : "text-base-content/60"
              }`}
            >
              <IconThumbsUp size={14} />
              {comment.likes + (liked ? 1 : 0)}
            </button>
            {!isReply && (
              <button
                type="button"
                onClick={() => onReply(author.name)}
                className="inline-flex items-center gap-1 text-xs font-medium text-base-content/60"
              >
                <IconReply size={14} />
                Responder
              </button>
            )}
          </div>
        </div>
        {comment.replies.length > 0 && (
          <div className="mt-3 flex flex-col gap-3">
            {comment.replies.map((reply) => {
              const replyAuthor = getUserById(reply.authorId);
              return (
                <div key={reply.id} className="flex gap-3 pl-4">
                  <Avatar
                    name={replyAuthor.name}
                    gradient={replyAuthor.gradient}
                    size="xs"
                  />
                  <div className="min-w-0 flex-1 rounded-box border border-base-300/50 bg-base-200/50 p-3">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold">{replyAuthor.name}</p>
                      <span className="text-xs text-base-content/50">
                        {reply.createdAt}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed">{reply.content}</p>
                    <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-base-content/60">
                      <IconHeart size={13} />
                      {reply.likes}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export function CommentsSection({
  publicationId,
}: {
  publicationId: string;
}) {
  const [items, setItems] = useState<Comment[]>(
    comments.filter((c) => c.publicationId === publicationId),
  );
  const [text, setText] = useState("");
  const currentUser = getUserById("u1");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    const newComment: Comment = {
      id: `c${Date.now()}`,
      publicationId,
      authorId: currentUser.id,
      content: text.trim(),
      createdAt: "Ahora mismo",
      likes: 0,
      replies: [],
    };
    setItems((prev) => [...prev, newComment]);
    setText("");
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section className="mt-10">
      <h2 className="mb-5 text-xl font-bold tracking-tight">
        Comentarios{" "}
        <span className="text-base-content/50">({items.length})</span>
      </h2>

      <form onSubmit={submit} className="mb-8 flex gap-3">
        <Avatar
          name={currentUser.name}
          gradient={currentUser.gradient}
          size="sm"
        />
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Aporta algo valioso a la conversación..."
            rows={3}
            className="textarea textarea-bordered w-full rounded-2xl resize-none"
          />
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              className="btn btn-primary btn-sm rounded-full px-5"
              disabled={!text.trim()}
            >
              <IconSend size={15} />
              Comentar
            </button>
          </div>
        </div>
      </form>

      {items.length === 0 ? (
        <div className="rounded-box border border-dashed border-base-300 p-8 text-center text-sm text-base-content/50">
          Aún no hay comentarios. Sé la primera persona en aportar.
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {items.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onReply={(author) => setText(`@${author} `)}
              onDelete={remove}
            />
          ))}
        </div>
      )}
    </section>
  );
}
