# SellMind — CRM com inteligência artificial

> Saiba quais leads vão fechar e o que dizer a cada um.

O **SellMind** é um CRM para pequenos times comerciais. Ele organiza os contatos em um funil de vendas visual e, com inteligência artificial, aponta os leads mais quentes e sugere o próximo follow-up.

🔗 **Demonstração ao vivo:** _em breve_

---

## ✨ Funcionalidades

| Status | Funcionalidade |
|:---:|---|
| ✅ | **Página inicial** apresentando o produto |
| ✅ | **Lista de leads** com busca por nome/empresa e filtros por etapa e temperatura |
| ✅ | **Painel de resumo**: leads em aberto, valor em negociação, leads quentes e vendas fechadas |
| ✅ | **Funil de vendas (kanban)** com arrastar e soltar entre as etapas |
| ✅ | **Cadastro de leads** com validação de campos |
| ✅ | **Exclusão de leads** com confirmação |
| ✅ | **Layout responsivo**, funcionando no computador e no celular |
| 🚧 | Banco de dados e login de usuários (Supabase) |
| 🚧 | **IA:** classificação do lead em quente, morno ou frio, com justificativa |
| 🚧 | **IA:** sugestão de mensagem de follow-up pronta para enviar |

## 🛠️ Tecnologias

- **[Next.js 16](https://nextjs.org/)** (App Router) e **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Vercel** para hospedagem
- Em breve: **Supabase** (banco de dados e autenticação) e **API de IA** (LLM)

## 🧠 Decisões técnicas

- **Componentes reutilizáveis:** etiquetas de etapa e temperatura são compartilhadas entre a lista e o funil.
- **Server e Client Components:** as páginas são renderizadas no servidor; só as partes interativas (filtros, funil, formulário) rodam no navegador.
- **Estado compartilhado:** os leads ficam em um armazenamento único (`useSyncExternalStore` + `localStorage`), sincronizado entre as telas e as abas do navegador. É uma etapa provisória até a integração com o banco de dados.
- **Acessibilidade:** o funil oferece, além de arrastar, um menu "Mover para…", que funciona no celular e pelo teclado.

## 📁 Estrutura

```
src/
├── app/
│   ├── page.tsx            # Página inicial
│   ├── leads/page.tsx      # Lista de leads + resumo
│   ├── leads/novo/page.tsx # Cadastro de lead
│   └── funil/page.tsx      # Funil de vendas (kanban)
├── components/             # Componentes de interface
└── lib/
    ├── leads.ts            # Tipos, dados de exemplo e formatação
    └── armazenamentoLeads.ts # Armazenamento compartilhado dos leads
```

## ▶️ Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior.

```bash
git clone <url-deste-repositório>
cd <pasta-do-projeto>
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🗺️ Próximos passos

1. Integrar o **Supabase**: banco de dados e login de usuários
2. Classificação automática de leads com **IA**
3. Geração de **follow-ups** personalizados com IA

---

Desenvolvido por **Marconi Resende** como projeto de portfólio.
