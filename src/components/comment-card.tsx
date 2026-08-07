import { useEffect, useState } from "react";
import type { CommentResponse } from "../models/Comment";
import { getMideaProfileUserById, type Midea } from "../models/Midea";
import { ReportModal } from "./report-modal";
import { reportComment } from "../models/Report";

interface CommentProps {
  data: CommentResponse
}

export function CommentCard( {data}: CommentProps) {
  const [mideaProfile, setMideaProfile] = useState<Midea | null>();

  useEffect(() => {
    async function loadMidea() {
      const response = await getMideaProfileUserById(data.owner);
      setMideaProfile(response);
    }
    loadMidea()
  }, []);

  const handleReport = async (reason: string) => {
    try {
      const response = await reportComment(data, reason);
      if (response !== null) console.log("Report do commentário criado com sucesso!");
    } catch (error) {
      console.error("Falha ao criar o report do commentário! ", error);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-start gap-4 shadow-lg transition-colors hover:border-zinc-700">
      {/* Avatar / Foto de Perfil */}
      <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex-shrink-0 flex items-center justify-center text-[10px] text-zinc-400 overflow-hidden">
        {mideaProfile?.link ? (
          <img 
            src={mideaProfile.link} 
            alt={data.owner_username} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <span>image_profile</span>
        )}
      </div>

      {/* Conteúdo do Comentário */}
      <div className="flex flex-col gap-1 flex-1">
        <span className="font-semibold text-sm text-zinc-100 hover:underline cursor-pointer">
          @{data.owner_username}
        </span>
        <p className="text-sm text-zinc-300 leading-relaxed break-words">
          {data.text}
        </p>
      </div>

      {/* Lado Direito: Botão Report - Sutil */}
        <ReportModal
        type="comment"
        onConfirm={(reason) => {handleReport(reason)}}
        trigger={
            <button className="px-3 py-1 text-xs font-medium text-neutral-400 rounded-md border border-neutral-700 hover:bg-red-950/50 hover:text-red-400 hover:border-red-400 transition-colors">
            Report
            </button>
        }
        />
    </div>
  );
}