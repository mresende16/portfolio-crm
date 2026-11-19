"use client";

import { useLeads } from "@/lib/armazenamentoLeads";
import { formatarMoeda } from "@/lib/leads";

export function ResumoDeLeads() {
  const leads = useLeads();

  const emAberto = leads.filter((l) => l.etapa !== "fechado" && l.etapa !== "perdido");
  const valorEmAberto = emAberto.reduce((soma, l) => soma + l.valorEstimado, 0);
  const quentes = emAberto.filter((l) => l.temperatura === "quente").length;
  const valorFechado = leads
    .filter((l) => l.etapa === "fechado")
    .reduce((soma, l) => soma + l.valorEstimado, 0);

  const resumo = [
    { titulo: "Leads em aberto", valor: String(emAberto.length) },
    { titulo: "Valor em negociação", valor: formatarMoeda(valorEmAberto) },
    { titulo: "Leads quentes 🔥", valor: String(quentes) },
    { titulo: "Vendas fechadas", valor: formatarMoeda(valorFechado) },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {resumo.map((item) => (
        <div
          key={item.titulo}
          className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="text-sm text-zinc-500">{item.titulo}</div>
          <div className="mt-1 text-lg font-semibold tabular-nums sm:text-2xl text-zinc-950 dark:text-zinc-50">
            {item.valor}
          </div>
        </div>
      ))}
    </section>
  );
}
