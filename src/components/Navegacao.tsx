"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", nome: "Início" },
  { href: "/leads", nome: "Leads" },
  { href: "/funil", nome: "Funil" },
];

export function Navegacao() {
  const caminhoAtual = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold text-zinc-950 dark:text-zinc-50">
          Mini-CRM <span className="text-emerald-600">IA</span>
        </Link>
        <nav className="flex gap-1">
          {links.map((link) => {
            const ativo = caminhoAtual === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  ativo
                    ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50"
                    : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                }`}
              >
                {link.nome}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
