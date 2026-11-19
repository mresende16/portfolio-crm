import Link from "next/link";

const recursos = [
  {
    icone: "📋",
    titulo: "Cadastro de leads",
    descricao: "Nome, empresa, contato, origem e anotações de cada conversa.",
  },
  {
    icone: "🗂️",
    titulo: "Funil de vendas",
    descricao: "Acompanhe cada lead de “Novo” até “Fechado” em um quadro visual.",
  },
  {
    icone: "🔥",
    titulo: "Classificação com IA",
    descricao: "A IA lê suas anotações e indica se o lead está quente, morno ou frio.",
  },
  {
    icone: "💬",
    titulo: "Follow-up sugerido",
    descricao: "Receba a próxima mensagem pronta para enviar por WhatsApp ou e-mail.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-12">
        <header className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            Em construção
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Mini-CRM com IA
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Organize seus leads e deixe a inteligência artificial apontar onde
            focar e o que dizer em cada follow-up.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              href="/leads"
              className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Ver leads
            </Link>
            <Link
              href="/funil"
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Abrir funil
            </Link>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          {recursos.map((recurso) => (
            <div
              key={recurso.titulo}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="text-2xl">{recurso.icone}</div>
              <h2 className="mt-3 font-semibold text-zinc-950 dark:text-zinc-50">
                {recurso.titulo}
              </h2>
              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {recurso.descricao}
              </p>
            </div>
          ))}
        </section>

        <footer className="text-sm text-zinc-500">
          Projeto de portfólio de Marconi Resende · Next.js · Supabase · IA
        </footer>
      </main>
    </div>
  );
}
