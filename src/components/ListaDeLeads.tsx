"use client";

import { useState } from "react";
import {
  ETAPAS,
  TEMPERATURAS,
  formatarData,
  formatarMoeda,
  type Etapa,
  type Lead,
  type Temperatura,
} from "@/lib/leads";
import { EtiquetaEtapa, EtiquetaTemperatura } from "@/components/Etiquetas";

const estiloDoCampo =
  "h-10 rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100";

export function ListaDeLeads({ leads }: { leads: Lead[] }) {
  const [busca, setBusca] = useState("");
  const [etapa, setEtapa] = useState<Etapa | "todas">("todas");
  const [temperatura, setTemperatura] = useState<Temperatura | "todas">("todas");

  const termo = busca.trim().toLowerCase();
  const leadsFiltrados = leads.filter((lead) => {
    const bateBusca =
      termo === "" ||
      lead.nome.toLowerCase().includes(termo) ||
      lead.empresa.toLowerCase().includes(termo);
    const bateEtapa = etapa === "todas" || lead.etapa === etapa;
    const bateTemperatura = temperatura === "todas" || lead.temperatura === temperatura;
    return bateBusca && bateEtapa && bateTemperatura;
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          placeholder="Buscar por nome ou empresa..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className={`${estiloDoCampo} flex-1`}
          aria-label="Buscar lead"
        />
        <select
          value={etapa}
          onChange={(e) => setEtapa(e.target.value as Etapa | "todas")}
          className={estiloDoCampo}
          aria-label="Filtrar por etapa"
        >
          <option value="todas">Todas as etapas</option>
          {ETAPAS.map((e) => (
            <option key={e.id} value={e.id}>
              {e.nome}
            </option>
          ))}
        </select>
        <select
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value as Temperatura | "todas")}
          className={estiloDoCampo}
          aria-label="Filtrar por temperatura"
        >
          <option value="todas">Todas as temperaturas</option>
          {TEMPERATURAS.map((t) => (
            <option key={t.id} value={t.id}>
              {t.icone} {t.nome}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-zinc-500">
        {leadsFiltrados.length} de {leads.length} leads
      </p>

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500 dark:border-zinc-800">
            <tr>
              <th className="px-4 py-3 font-medium">Lead</th>
              <th className="px-4 py-3 font-medium">Etapa</th>
              <th className="px-4 py-3 font-medium">Temperatura</th>
              <th className="px-4 py-3 font-medium">Origem</th>
              <th className="px-4 py-3 text-right font-medium">Valor estimado</th>
              <th className="px-4 py-3 text-right font-medium">Último contato</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
            {leadsFiltrados.map((lead) => (
              <tr key={lead.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="px-4 py-3">
                  <div className="font-medium text-zinc-950 dark:text-zinc-50">
                    {lead.nome}
                  </div>
                  <div className="text-zinc-500">{lead.empresa}</div>
                </td>
                <td className="px-4 py-3">
                  <EtiquetaEtapa etapa={lead.etapa} />
                </td>
                <td className="px-4 py-3">
                  <EtiquetaTemperatura temperatura={lead.temperatura} />
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                  {lead.origem}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-zinc-900 dark:text-zinc-100">
                  {formatarMoeda(lead.valorEstimado)}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-zinc-600 dark:text-zinc-400">
                  {formatarData(lead.ultimoContato)}
                </td>
              </tr>
            ))}
            {leadsFiltrados.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-zinc-500">
                  Nenhum lead encontrado com esses filtros.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
