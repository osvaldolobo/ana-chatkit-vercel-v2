import Head from "next/head";
import ChatKitWrapper from "@/components/ChatKitWrapper";

const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID || "";

export default function Home() {
  return (
    <>
      <Head>
        <title>ANA — DES.CONF.IA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <header
          style={{
            padding: "16px",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            backgroundColor: "#f9fafb",
          }}
        >
          <h1>ANA — Assistente Digital DES.CONF.IA</h1>
          <p>Protótipo público (v2) — Empoderamento Digital</p>
        </header>

        <div
          style={{
            flex: "1 1 auto",
            maxWidth: 960,
            margin: "0 auto",
            width: "100%",
            padding: "12px",
          }}
        >
          <ChatKitWrapper workflow={WORKFLOW_ID} />
        </div>

        <footer
          style={{
            padding: "12px",
            borderTop: "1px solid rgba(0,0,0,0.1)",
            backgroundColor: "#f9fafb",
          }}
        >
          <small>
            © {new Date().getFullYear()} DES.CONF.IA — Teste público. Nenhum
            dado sensível é armazenado.
          </small>
        </footer>
      </main>
    </>
  );
}
