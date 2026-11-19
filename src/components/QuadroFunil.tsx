"use client";

import { useState } from "react";
import { moverLead, useLeads } from "@/lib/armazenamentoLeads";
import { ETAPAS, formatarMoeda, type Etapa } from "@/lib/leads";
import { EtiquetaTemperatura } from "@/components/Etiquetas";

export function QuadroFunil() {
  const leads = useLeads();
  const [colunaEmDestaque, setColunaEmDestaque] = useState<Etapa | null>(null);

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {ETAPAS.map((etapa) => {
        const leadsDaColuna = leads.filter((l) => l.etapa === etapa.id);
        const total = leadsDaColuna.reduce((soma, l) => soma + l.valorEstimado, 0);
        const destacada = colunaEmDestaque === etapa.id;

        return (
          <section
            key={etapa.id}
            onDragOver={(e) => {
              e.preventDefault(); // permite soltar o card aqui
              setColunaEmDestaque(etapa.id);
            }}
            onDragLeave={() => setColunaEmDestaque(null)}
            onDrop={(e) => {
              e.preventDefault();
              moverLead(e.dataTransfer.getData("text/plain"), etapa.id);
              setColunaEmDestaque(null);
            }}
            className={`flex w-72 shrink-0 flex-col gap-3 rounded-2xl border p-3 transition-colors ${
              destacada
                ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                : "border-zinc-200 bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/60"
            }`}
          >
            <header className="flex items-baseline justify-between px-1">
              <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {etapa.nome}{" "}
                <span className="font-normal text-zinc-500">({leadsDaColuna.length})</span>
              </h2>
              <span className="text-xs tabular-nums text-zinc-500">{formatarMoeda(total)}</span>
            </header>

            {leadsDaColuna.map((lead) => (
              <article
                key={lead.id}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", lead.id)}
                className="flex cursor-grab flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm active:cursor-grabbing dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div>
                  <div className="font-medium text-zinc-950 dark:text-zinc-50">{lead.nome}</div>
                  <div className="text-sm text-zinc-500">{lead.empresa}</div>
                </div>
                <p className="line-clamp-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                  {lead.anotacoes}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <EtiquetaTemperatura temperatura={lead.temperatura} />
                  <span className="text-sm font-medium tabular-nums text-zinc-900 dark:text-zinc-100">
                    {formatarMoeda(lead.valorEstimado)}
                  </span>
                </div>
                {/* Alternativa ao arrastar: funciona no celular e no teclado */}
                <select
                  value={lead.etapa}
                  onChange={(e) => moverLead(lead.id, e.target.value as Etapa)}
                  className="h-8 rounded-lg border border-zinc-200 bg-transparent px-2 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                  aria-label={`Mover ${lead.nome} para outra etapa`}
                >
                  {ETAPAS.map((e) => (
                    <option key={e.id} value={e.id}>
                      Mover para: {e.nome}
                    </option>
                  ))}
                </select>
              </article>
            ))}

            {leadsDaColuna.length === 0 && (
              <p className="rounded-xl border border-dashed border-zinc-300 p-4 text-center text-xs text-zinc-500 dark:border-zinc-700">
                Arraste um lead para cá
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
