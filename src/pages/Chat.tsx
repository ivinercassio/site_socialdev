"use client"

import { useState } from "react"
import { ArrowLeftIcon, ArrowUpIcon, MessageCircleDashedIcon } from "lucide-react"
import { useNavigate } from "react-router-dom" 

import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../components/ui/empty"
import { InputGroup, InputGroupAddon, InputGroupButton } from "../components/ui/input-group"
import { MessageScroller, MessageScrollerButton, MessageScrollerContent, MessageScrollerProvider,  MessageScrollerViewport } from "../components/ui/message-scroller"
import { MessageAnimated } from "../components/message-animated"

interface FriendData {
  id: number,
  username: string
  name: string
  avatarUrl?: string
}

interface Message {
  id: string
  role: "user" | "assistant" | "friend"
  content: string
}

export function Chat() {
  const navigate = useNavigate()
  const [inputMessage, setInputMessage] = useState("")

  // Dados do Amigo (podem vir de props ou parâmetros de rota)
  const friend: FriendData = {
    id: 5,
    username: "alice_dev",
    name: "Alice",
    avatarUrl: "",
  }

  // Lista de mensagens inicial
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "assistant", content: "Hey! How is the project going?" },
    { id: "2", role: "user", content: "Hey Alice! I just finished the components." },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
    }

    setMessages((prev) => [...prev, newMessage])
    setInputMessage("")
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-4">
      <MessageScrollerProvider autoScroll>
        <Card className="w-full max-w-2xl h-[650px] bg-zinc-900 border-zinc-800 flex flex-col justify-between shadow-2xl">
          
          <CardHeader className="flex flex-row items-center gap-3 border-b border-zinc-800 p-4 space-y-0">
            {/* Botão de Voltar */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/myfriends")}
                className="text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full shrink-0"
                aria-label="Back to friends"
            >
                <ArrowLeftIcon className="w-5 h-5" />
            </Button>

            {/* Informações do Amigo (Foto + Username) */}
            <div 
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => navigate(`/profile/${friend.id}`)}
            >
                {/* Avatar do Amigo */}
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-400 overflow-hidden shrink-0">
                {friend.avatarUrl ? (
                    <img
                    src={friend.avatarUrl}
                    alt={friend.username}
                    className="w-full h-full object-cover"
                    />
                ) : (
                    <span>image_profile</span>
                )}
                </div>

                {/* Username */}
                <div className="flex flex-col">
                <span className="font-semibold text-sm text-zinc-100">
                    @{friend.username}
                </span>
                </div>
            </div>
            </CardHeader>

          {/* Área Principal de Mensagens */}
          <CardContent className="flex-1 overflow-hidden p-0">
            {messages.length === 0 ? (
              <Empty className="h-full">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <MessageCircleDashedIcon />
                  </EmptyMedia>
                  <EmptyTitle>No messages yet</EmptyTitle>
                  <EmptyDescription>
                    Send a message to start conversing with @{friend.username}.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            ) : (
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-4 flex flex-col gap-3">
                    {messages.map((message) => (
                      <MessageAnimated
                        key={message.id}
                        message={message}
                        scrollAnchor={message.role === "user"}
                      />
                    ))}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton variant={undefined} size={undefined} />
              </MessageScroller>
            )}
          </CardContent>

          {/* Rodapé / Input para envio de Texto */}
          <CardFooter className="p-3 border-t border-zinc-800 bg-zinc-900/50">
            <form onSubmit={handleSendMessage} className="w-full">
              <InputGroup className="bg-zinc-800 border-zinc-700 rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-zinc-500">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage(e)
                    }
                  }}
                  placeholder={`Message @${friend.username}...`}
                  rows={1}
                  className="w-full bg-transparent p-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none resize-none"
                />
                <InputGroupAddon align="block-end" className="p-2">
                  <InputGroupButton
                    type="submit"
                    variant="default"
                    size="icon-sm"
                    disabled={!inputMessage.trim()}
                    className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                  >
                    <ArrowUpIcon className="w-4 h-4" />
                    <span className="sr-only">Send</span>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </CardFooter>

        </Card>
      </MessageScrollerProvider>
    </div>
  )
}