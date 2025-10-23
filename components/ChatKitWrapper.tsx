"use client";
import React, { useEffect, useState } from "react";

export default function ChatKitWrapper({ workflow }: { workflow: string }) {
  const [iframeSrc, setIframeSrc] = useState<string>("");

  useEffect(() => {
    // Monta a URL pública do ChatKit (embed direto)
    const baseUrl = "https://chat.openai.com/embed/";
    const fullUrl = `${baseUrl}${workflow}`;
    setIframeSrc(fullUrl);
  }, [workflow]);

  if (!iframeSrc) return <p>Carregando interface da ANA...</p>;

  return (
    <iframe
      src={iframeSrc}
      style={{
        width: "100%",
        height: "80vh",
        border: "none",
        borderRadius: "12px",
      }}
      allow="microphone; clipboard-write; clipboard-read"
    />
  );
}
