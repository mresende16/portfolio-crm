// Logo do SellMind: um gráfico em alta formado por "nós" (vendas + inteligência artificial).

export function IconeLogo({ tamanho = "h-8 w-8" }: { tamanho?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 shadow-sm shadow-indigo-500/30 ${tamanho}`}
    >
      <svg viewBox="0 0 32 32" className="h-[70%] w-[70%]" aria-hidden="true">
        <polyline
          points="6,22 12,15 18,19 26,9"
          fill="none"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="22" r="2.4" fill="white" />
        <circle cx="12" cy="15" r="2.4" fill="white" />
        <circle cx="18" cy="19" r="2.4" fill="white" />
        <circle cx="26" cy="9" r="2.4" fill="white" />
      </svg>
    </span>
  );
}

// "compacto": em telas muito estreitas (celulares pequenos) mostra só o ícone.
export function Logo({ compacto = false }: { compacto?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <IconeLogo />
      <span
        className={`text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 ${
          compacto ? "hidden min-[380px]:inline" : ""
        }`}
      >
        Sell<span className="text-indigo-600 dark:text-indigo-400">Mind</span>
      </span>
    </span>
  );
}
