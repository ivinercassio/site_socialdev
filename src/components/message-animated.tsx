interface MessageAnimatedProps {
  message: {
    role: string;
    content: string;
  };
  scrollAnchor?: boolean;
}

export function MessageAnimated({ message }: MessageAnimatedProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex w-full animate-in fade-in slide-in-from-bottom-2 duration-300 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-zinc-800 text-zinc-100 rounded-bl-none border border-zinc-700"
        }`}
      >
        <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
      </div>
    </div>
  );
}