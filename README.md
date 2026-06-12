# lastro-apto

Dashboard de acompanhamento do lastro financeiro do apartamento.  
Conta 16034737 · XP Unique · R$ 1.900.000

## Stack

- React + Vite
- Supabase (Auth + Database)
- Chart.js
- Vercel (deploy)

## Setup local

```bash
npm install
cp .env.example .env
# preencha as variáveis no .env
npm run dev
```

## Variáveis de ambiente

```
VITE_SUPABASE_URL=https://tnzwvcggqmptektluedx.supabase.co
VITE_SUPABASE_KEY=sb_publishable_...
```

## Supabase

Execute o arquivo `supabase_setup.sql` no SQL Editor do projeto antes do primeiro uso.

## Deploy (Vercel)

1. Conecte o repositório no Vercel
2. Adicione as variáveis de ambiente acima
3. Framework: Vite
4. Deploy automático a cada push na branch `main`
