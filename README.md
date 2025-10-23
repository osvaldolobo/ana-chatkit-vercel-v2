# ANA — ChatKit (Vercel) — DES.CONF.IA

## 1️⃣ Instalar dependências
```bash
npm install
```

## 2️⃣ Rodar localmente
```bash
npm run dev
```
Abra: [http://localhost:3000](http://localhost:3000)

## 3️⃣ Deploy na Vercel
- Vá até https://vercel.com/new
- Clique em "Import Project" → "Manual Upload"
- Envie esta pasta (ou o .zip)
- A Vercel gera um link ex: https://ana-desconfia.vercel.app

## 4️⃣ Adicionar domínio
No projeto → Settings → Domains → Add Domain
Digite: `www.desconfia.app.br`

## 5️⃣ Configurar DNS (no registro.br)
```
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com.
```
Depois clique "Verify" na Vercel.

## 6️⃣ Autorizar domínio no Agent Builder
Em https://platform.openai.com/agent-builder →
Code → ChatKit → Add Domain → `www.desconfia.app.br`

## 7️⃣ Teste público
Acesse: https://www.desconfia.app.br
