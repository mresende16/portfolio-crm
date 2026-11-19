import type { Metadata } from "next";
import Link from "next/link";
import { ListaDeLeads } from "@/components/ListaDeLeads";
import { ResumoDeLeads } from "@/components/ResumoDeLeads";

export const metadata: Metadata = {
  title: "Leads · SellMind",
};

export default function PaginaDeLeads() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Leads
          </h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Todos os seus contatos comerciais em um só lugar.
          </p>
        </div>
        <Link
          href="/leads/novo"
          className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
        >
          + Novo lead
        </Link>
      </div>

      <ResumoDeLeads />
      <ListaDeLeads />
    </main>
  );
}
