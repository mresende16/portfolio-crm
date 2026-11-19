"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { adicionarLead } from "@/lib/armazenamentoLeads";
import { ETAPAS, ORIGENS, type Etapa, type Origem } from "@/lib/leads";

const estiloDoCampo =
  "h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-indigo-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100";

const estiloDoRotulo = "flex flex-col gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300";

function dataDeHoje(): string {
  const hoje = new Date();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  return `${hoje.getFullYear()}-${mes}-${dia}`;
}

export function FormularioNovoLead() {
  const router = useRouter();
  const [erro, setErro] = useState<string | null>(null);

  function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    const texto = (campo: string) => String(dados.get(campo) ?? "").trim();

    const nome = texto("nome");
    const empresa = texto("empresa");
    const valor = Number(texto("valorEstimado").replace(",", ".") || "0");

    if (!nome || !empresa) {
      setErro("Preencha pelo menos o nome e a empresa.");
      return;
    }
    if (Number.isNaN(valor) || valor < 0) {
      setErro("O valor estimado precisa ser um número igual ou maior que zero.");
      return;
    }

    adicionarLead({
      nome,
      empresa,
      email: texto("email"),
      telefone: texto("telefone"),
      origem: texto("origem") as Origem,
      etapa: texto("etapa") as Etapa,
      valorEstimado: valor,
      ultimoContato: texto("ultimoContato") || dataDeHoje(),
      anotacoes: texto("anotacoes"),
      temperatura: null, // a IA vai classificar na etapa 5
    });

    router.push("/leads");
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={estiloDoRotulo}>
          Nome do contato *
          <input name="nome" required placeholder="Ex.: Maria Oliveira" className={estiloDoCampo} />
        </label>
        <label className={estiloDoRotulo}>
          Empresa *
          <input
            name="empresa"
            required
            placeholder="Ex.: Oliveira Comércio"
            className={estiloDoCampo}
          />
        </label>
        <label className={estiloDoRotulo}>
          E-mail
          <input
            name="email"
            type="email"
            placeholder="maria@empresa.com.br"
            className={estiloDoCampo}
          />
        </label>
        <label className={estiloDoRotulo}>
          Telefone / WhatsApp
          <input
            name="telefone"
            type="tel"
            placeholder="(31) 99999-9999"
            className={estiloDoCampo}
          />
        </label>
        <label className={estiloDoRotulo}>
          Origem
          <select name="origem" defaultValue="Indicação" className={estiloDoCampo}>
            {ORIGENS.map((origem) => (
              <option key={origem} value={origem}>
                {origem}
              </option>
            ))}
          </select>
        </label>
        <label className={estiloDoRotulo}>
          Etapa do funil
          <select name="etapa" defaultValue="novo" className={estiloDoCampo}>
            {ETAPAS.map((etapa) => (
              <option key={etapa.id} value={etapa.id}>
                {etapa.nome}
              </option>
            ))}
          </select>
        </label>
        <label className={estiloDoRotulo}>
          Valor estimado (R$)
          <input
            name="valorEstimado"
            type="number"
            min="0"
            step="100"
            placeholder="0"
            className={estiloDoCampo}
          />
        </label>
        <label className={estiloDoRotulo}>
          Último contato
          <input name="ultimoContato" type="date" className={estiloDoCampo} />
          <span className="text-xs font-normal text-zinc-500">Se deixar vazio, usa a data de hoje.</span>
        </label>
      </div>

      <label className={estiloDoRotulo}>
        Anotações da conversa
        <textarea
          name="anotacoes"
          rows={4}
          placeholder="O que o cliente disse, o que pediu, próximos passos... A IA vai usar essas anotações para classificar o lead."
          className={`${estiloDoCampo} h-auto py-2`}
        />
      </label>

      {erro && (
        <p role="alert" className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:bg-rose-950 dark:text-rose-300">
          {erro}
        </p>
      )}

      <div className="flex justify-end gap-3">
        <Link
          href="/leads"
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          Cancelar
        </Link>
        <button
          type="submit"
          className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
        >
          Salvar lead
        </button>
      </div>
    </form>
  );
}
