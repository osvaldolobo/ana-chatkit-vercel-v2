"use client";
import React, { useEffect, useState } from "react";

export default function ChatKitWrapper({ workflow }: { workflow?: string }) {
  const [iframeSrc, setIframeSrc] = useState<string>("");

  useEffect(() => {
    const id =
      workflow || process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID || "";

    // ✅ URL correta do embed do Agent Builder
    const baseUrl = "https://chat.openai.com/embed/workflows/";

    if (id) setIframeSrc(`${baseUrl}${id}`);
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
