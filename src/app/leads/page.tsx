import type { Metadata } from "next";
import { ListaDeLeads } from "@/components/ListaDeLeads";
import { formatarMoeda, leadsDeExemplo } from "@/lib/leads";

export const metadata: Metadata = {
  title: "Leads · Mini-CRM com IA",
};

export default function PaginaDeLeads() {
  const leads = leadsDeExemplo;

  const emAberto = leads.filter((l) => l.etapa !== "fechado" && l.etapa !== "perdido");
  const valorEmAberto = emAberto.reduce((soma, l) => soma + l.valorEstimado, 0);
  const quentes = emAberto.filter((l) => l.temperatura === "quente").length;
  const fechados = leads.filter((l) => l.etapa === "fechado");
  const valorFechado = fechados.reduce((soma, l) => soma + l.valorEstimado, 0);

  const resumo = [
    { titulo: "Leads em aberto", valor: String(emAberto.length) },
    { titulo: "Valor em negociação", valor: formatarMoeda(valorEmAberto) },
    { titulo: "Leads quentes 🔥", valor: String(quentes) },
    { titulo: "Vendas fechadas", valor: formatarMoeda(valorFechado) },
  ];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Leads
        </h1>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
          Todos os seus contatos comerciais em um só lugar.
        </p>
      </div>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {resumo.map((item) => (
          <div
            key={item.titulo}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="text-sm text-zinc-500">{item.titulo}</div>
            <div className="mt-1 text-2xl font-semibold tabular-nums text-zinc-950 dark:text-zinc-50">
              {item.valor}
            </div>
          </div>
        ))}
      </section>

      <ListaDeLeads leads={leads} />
    </main>
  );
}
