import { nomeDaEtapa, TEMPERATURAS, type Etapa, type Temperatura } from "@/lib/leads";

const coresDaTemperatura: Record<Temperatura, string> = {
  quente: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
  morno: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  frio: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
};

const coresDaEtapa: Record<Etapa, string> = {
  novo: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  contato: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
  proposta: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300",
  negociacao: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  fechado: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  perdido: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
};

const estiloBase =
  "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium";

export function EtiquetaTemperatura({
  temperatura,
}: {
  temperatura: Temperatura | null;
}) {
  if (!temperatura) {
    return (
      <span
        className={`${estiloBase} border border-dashed border-zinc-300 text-zinc-500 dark:border-zinc-700`}
        title="Será classificado pela IA"
      >
        ✨ Aguardando IA
      </span>
    );
  }

  const info = TEMPERATURAS.find((t) => t.id === temperatura)!;
  return (
    <span className={`${estiloBase} ${coresDaTemperatura[temperatura]}`}>
      {info.icone} {info.nome}
    </span>
  );
}

export function EtiquetaEtapa({ etapa }: { etapa: Etapa }) {
  return (
    <span className={`${estiloBase} ${coresDaEtapa[etapa]}`}>
      {nomeDaEtapa(etapa)}
    </span>
  );
}
