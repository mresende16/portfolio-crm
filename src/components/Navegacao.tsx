"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

// "Início" some no celular para caber no menu: o logo já leva para a página inicial.
const links = [
  { href: "/", nome: "Início", soNoComputador: true },
  { href: "/leads", nome: "Leads", soNoComputador: false },
  { href: "/funil", nome: "Funil", soNoComputador: false },
];

export function Navegacao() {
  const caminhoAtual = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" aria-label="SellMind — página inicial">
          <Logo compacto />
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((link) => {
            const ativo = caminhoAtual === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-2 py-1.5 text-sm font-medium transition-colors sm:block sm:px-3 ${
                  link.soNoComputador ? "hidden" : "block"
                } ${
                  ativo
                    ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50"
                    : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                }`}
              >
                {link.nome}
              </Link>
            );
          })}
          <Link
            href="/leads/novo"
            className="ml-1 whitespace-nowrap rounded-full bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-500 sm:ml-2 sm:px-4"
          >
            + Novo<span className="hidden sm:inline"> lead</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
