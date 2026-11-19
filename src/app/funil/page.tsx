import type { Metadata } from "next";
import { QuadroFunil } from "@/components/QuadroFunil";
import { leadsDeExemplo } from "@/lib/leads";

export const metadata: Metadata = {
  title: "Funil · Mini-CRM com IA",
};

export default function PaginaDoFunil() {
  return (
    <main className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-6 py-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Funil de vendas
        </h1>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
          Arraste os cards entre as colunas para atualizar a etapa de cada lead.
        </p>
      </div>

      <QuadroFunil leadsIniciais={leadsDeExemplo} />
    </main>
  );
}
