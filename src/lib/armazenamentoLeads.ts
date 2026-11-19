// Armazenamento dos leads no navegador (localStorage), compartilhado entre todas as telas.
// É uma solução provisória: na etapa 4 os dados passam a vir do banco de dados (Supabase).

import { useSyncExternalStore } from "react";
import { leadsDeExemplo, type Etapa, type Lead } from "@/lib/leads";

const CHAVE = "mini-crm-ia:leads";

let cache: Lead[] | null = null;
const ouvintes = new Set<() => void>();

function ler(): Lead[] {
  if (cache) return cache;
  try {
    const salvo = localStorage.getItem(CHAVE);
    cache = salvo ? (JSON.parse(salvo) as Lead[]) : leadsDeExemplo;
  } catch {
    cache = leadsDeExemplo;
  }
  return cache;
}

function salvar(novosLeads: Lead[]) {
  cache = novosLeads;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(novosLeads));
  } catch {
    // Sem acesso ao localStorage (ex.: navegação privada restrita): mantém só na memória.
  }
  ouvintes.forEach((avisar) => avisar());
}

function assinar(avisar: () => void) {
  ouvintes.add(avisar);

  // Mantém várias abas do navegador sincronizadas.
  function aoMudarEmOutraAba(evento: StorageEvent) {
    if (evento.key === CHAVE) {
      cache = null;
      avisar();
    }
  }
  window.addEventListener("storage", aoMudarEmOutraAba);

  return () => {
    ouvintes.delete(avisar);
    window.removeEventListener("storage", aoMudarEmOutraAba);
  };
}

/** Hook que devolve a lista de leads e atualiza a tela sempre que ela muda. */
export function useLeads(): Lead[] {
  return useSyncExternalStore(assinar, ler, () => leadsDeExemplo);
}

function gerarId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function adicionarLead(dados: Omit<Lead, "id">): Lead {
  const novo: Lead = { ...dados, id: gerarId() };
  salvar([novo, ...ler()]);
  return novo;
}

export function excluirLead(id: string) {
  salvar(ler().filter((lead) => lead.id !== id));
}

export function moverLead(id: string, novaEtapa: Etapa) {
  salvar(ler().map((lead) => (lead.id === id ? { ...lead, etapa: novaEtapa } : lead)));
}

export function restaurarLeadsDeExemplo() {
  salvar(leadsDeExemplo);
}
