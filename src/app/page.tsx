import Link from "next/link";
import type { ReactNode } from "react";
import { IconeLogo, Logo } from "@/components/Logo";

// Ícones simples em SVG (traço), para não depender de bibliotecas externas.
function Icone({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const recursos = [
  {
    titulo: "Todos os leads em um só lugar",
    descricao:
      "Cadastre contatos com empresa, origem, valor estimado e anotações de cada conversa. Busque e filtre em segundos.",
    icone: (
      <Icone>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
        <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
        <path d="M18.5 14.5a6.5 6.5 0 0 1 3 5.5" />
      </Icone>
    ),
  },
  {
    titulo: "Funil de vendas visual",
    descricao:
      "Acompanhe cada oportunidade de “Novo” até “Fechado”. Arraste os cards entre as etapas e veja o valor de cada coluna.",
    icone: (
      <Icone>
        <rect x="3" y="4" width="5" height="16" rx="1.5" />
        <rect x="10" y="4" width="5" height="11" rx="1.5" />
        <rect x="17" y="4" width="4" height="7" rx="1.5" />
      </Icone>
    ),
  },
  {
    titulo: "Temperatura definida pela IA",
    descricao:
      "A inteligência artificial lê suas anotações e indica se cada lead está quente, morno ou frio — e explica o porquê.",
    icone: (
      <Icone>
        <path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .5 2 1.5 3 2.5 3 0-3-1-5.5 0-8Z" />
      </Icone>
    ),
  },
  {
    titulo: "Follow-up pronto para enviar",
    descricao:
      "Receba a próxima mensagem sugerida para cada lead, no tom certo, pronta para copiar no WhatsApp ou no e-mail.",
    icone: (
      <Icone>
        <path d="M4 5h16v11H9l-5 4V5Z" />
        <path d="M8 9.5h8M8 12.5h5" />
      </Icone>
    ),
  },
];

const passos = [
  {
    numero: "01",
    titulo: "Cadastre o lead",
    descricao: "Registre o contato e anote o que foi conversado, do jeito que você já faz.",
  },
  {
    numero: "02",
    titulo: "A IA analisa",
    descricao: "O SellMind lê o histórico, classifica o interesse e identifica o momento da negociação.",
  },
  {
    numero: "03",
    titulo: "Aja com foco",
    descricao: "Priorize os leads quentes e envie o follow-up sugerido em poucos cliques.",
  },
];

const tecnologias = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "API de IA", "Vercel"];

// Prévia ilustrativa do produto (apenas visual).
const colunasDaPrevia = [
  {
    nome: "Em contato",
    cards: [{ nome: "JM Arquitetura", valor: "R$ 6.000", temperatura: "🌤️ Morno" }],
  },
  {
    nome: "Proposta",
    cards: [
      { nome: "Escola Pequeno Saber", valor: "R$ 15.000", temperatura: "🔥 Quente" },
      { nome: "Souza Materiais", valor: "R$ 9.500", temperatura: "🌤️ Morno" },
    ],
  },
  {
    nome: "Negociação",
    cards: [{ nome: "Clínica Sorriso Pleno", valor: "R$ 18.000", temperatura: "🔥 Quente" }],
  },
];

function PreviaDoProduto() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-r from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 blur-2xl"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-950">
        {/* barra da "janela" */}
        <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 rounded-md bg-zinc-100 px-3 py-0.5 text-xs text-zinc-500 dark:bg-zinc-900">
            sellmind.app/funil
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[1fr_280px]">
          {/* mini funil */}
          <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-3">
            {colunasDaPrevia.map((coluna) => (
              <div key={coluna.nome} className="flex flex-col gap-2 rounded-xl bg-zinc-100/70 p-2.5 dark:bg-zinc-900/70">
                <div className="px-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {coluna.nome} <span className="font-normal text-zinc-400">({coluna.cards.length})</span>
                </div>
                {coluna.cards.map((card) => (
                  <div
                    key={card.nome}
                    className="rounded-lg border border-zinc-200 bg-white p-2.5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="truncate text-xs font-medium text-zinc-900 dark:text-zinc-100">{card.nome}</div>
                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="text-zinc-500">{card.temperatura}</span>
                      <span className="font-medium tabular-nums text-zinc-700 dark:text-zinc-300">{card.valor}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* painel da IA */}
          <div className="flex flex-col gap-3 rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 dark:border-indigo-900 dark:bg-indigo-950/30">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <span>✨</span> Análise da IA
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Clínica Sorriso Pleno</div>
              <span className="mt-1 inline-block rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-medium text-red-800 dark:bg-red-950 dark:text-red-300">
                🔥 Quente · alta chance de fechamento
              </span>
            </div>
            <p className="text-xs leading-5 text-zinc-600 dark:text-zinc-400">
              A decisora pediu desconto para fechar ainda este mês — sinal claro de intenção de compra.
            </p>
            <div className="rounded-lg bg-white p-3 text-xs leading-5 text-zinc-700 shadow-sm dark:bg-zinc-950 dark:text-zinc-300">
              <div className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">Follow-up sugerido</div>
              “Oi, Ana! Consegui uma condição especial de 7% para fecharmos até sexta. Posso enviar o contrato?”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 pb-16 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            CRM com inteligência artificial
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-6xl dark:text-zinc-50">
            Saiba quais leads vão fechar{" "}
            <span className="bg-linear-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
              e o que dizer a cada um.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-pretty text-zinc-600 dark:text-zinc-400">
            O SellMind organiza seus contatos em um funil visual e usa IA para apontar as
            oportunidades mais quentes e sugerir o próximo follow-up.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/leads"
              className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors hover:bg-indigo-500"
            >
              Abrir o painel
            </Link>
            <Link
              href="/funil"
              className="rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Ver o funil de vendas
            </Link>
          </div>
        </div>

        <div className="px-6 pb-24">
          <PreviaDoProduto />
        </div>
      </section>

      {/* RECURSOS */}
      <section className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Recursos</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              Tudo o que você precisa para vender com foco
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {recursos.map((recurso) => (
              <div
                key={recurso.titulo}
                className="flex gap-4 rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-indigo-300 dark:border-zinc-800 dark:hover:border-indigo-800"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                  {recurso.icone}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">{recurso.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{recurso.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Como funciona</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              Da anotação à ação em três passos
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {passos.map((passo) => (
              <li key={passo.numero} className="relative rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="text-sm font-semibold tabular-nums text-indigo-600 dark:text-indigo-400">
                  {passo.numero}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-zinc-950 dark:text-zinc-50">{passo.titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{passo.descricao}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="border-y border-zinc-200 bg-white py-14 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
          <p className="text-sm font-medium text-zinc-500">Construído com tecnologias modernas</p>
          <ul className="flex flex-wrap justify-center gap-2.5">
            {tecnologias.map((tecnologia) => (
              <li
                key={tecnologia}
                className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
              >
                {tecnologia}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="px-6 py-24">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 to-violet-700 px-6 py-16 text-center shadow-xl shadow-indigo-900/20">
          <span className="rounded-2xl bg-white/15 p-1.5 ring-1 ring-white/30">
            <IconeLogo tamanho="h-12 w-12" />
          </span>
          <h2 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight text-white">
            Pronto para saber onde focar hoje?
          </h2>
          <p className="mt-3 max-w-lg text-indigo-100">
            Cadastre seu primeiro lead e veja o funil ganhar vida.
          </p>
          <Link
            href="/leads/novo"
            className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
          >
            Cadastrar um lead
          </Link>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
          <Logo />
          <p>© 2026 SellMind · Projeto de portfólio de Marconi Resende</p>
        </div>
      </footer>
    </div>
  );
}
