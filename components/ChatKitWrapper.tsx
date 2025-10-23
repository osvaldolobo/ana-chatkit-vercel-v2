// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";

export default function ChatKitWrapper({ workflow }: { workflow: string }) {
  const [ChatKit, setChatKit] = useState<any>(null);

  useEffect(() => {
    try {
      const chatkitModule = eval('require("@openai/chatkit")');
      setChatKit(() => chatkitModule.ChatKit);
    } catch (err) {
      console.error("Erro ao carregar ChatKit via require:", err);
    }
  }, []);

  if (!ChatKit) {
    return <p>Carregando interface da ANA...</p>;
  }

  return <ChatKit workflow={workflow} />;
}
