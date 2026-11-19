import type { Metadata } from "next";
import { FormularioNovoLead } from "@/components/FormularioNovoLead";

export const metadata: Metadata = {
  title: "Novo lead · SellMind",
};

export default function PaginaNovoLead() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Novo lead
        </h1>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
          Cadastre um novo contato comercial. Campos com * são obrigatórios.
        </p>
      </div>

      <FormularioNovoLead />
    </main>
  );
}
