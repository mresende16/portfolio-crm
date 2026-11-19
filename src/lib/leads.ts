// Definições do que é um "lead" no Mini-CRM e dados de teste.
// Na etapa 4 estes dados virão do banco de dados (Supabase).

export type Etapa =
  | "novo"
  | "contato"
  | "proposta"
  | "negociacao"
  | "fechado"
  | "perdido";

export type Temperatura = "quente" | "morno" | "frio";

export type Origem = "Indicação" | "Site" | "LinkedIn" | "Instagram" | "Evento";

export type Lead = {
  id: string;
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  origem: Origem;
  etapa: Etapa;
  valorEstimado: number;
  ultimoContato: string; // data no formato AAAA-MM-DD
  anotacoes: string;
  // Preenchida pela IA na etapa 5. "null" = ainda não classificado.
  temperatura: Temperatura | null;
};

// Ordem das colunas do funil de vendas.
export const ETAPAS: { id: Etapa; nome: string }[] = [
  { id: "novo", nome: "Novo" },
  { id: "contato", nome: "Em contato" },
  { id: "proposta", nome: "Proposta enviada" },
  { id: "negociacao", nome: "Negociação" },
  { id: "fechado", nome: "Fechado" },
  { id: "perdido", nome: "Perdido" },
];

export const TEMPERATURAS: { id: Temperatura; nome: string; icone: string }[] = [
  { id: "quente", nome: "Quente", icone: "🔥" },
  { id: "morno", nome: "Morno", icone: "🌤️" },
  { id: "frio", nome: "Frio", icone: "❄️" },
];

export function nomeDaEtapa(etapa: Etapa): string {
  return ETAPAS.find((e) => e.id === etapa)?.nome ?? etapa;
}

const formatadorDeMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function formatarMoeda(valor: number): string {
  return formatadorDeMoeda.format(valor);
}

// Converte "2026-11-10" em "10/11/2026" sem depender do fuso horário.
export function formatarData(data: string): string {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

export const leadsDeExemplo: Lead[] = [
  {
    id: "1",
    nome: "Ana Paula Ribeiro",
    empresa: "Clínica Sorriso Pleno",
    email: "ana@sorrisopleno.com.br",
    telefone: "(31) 99812-4410",
    origem: "Indicação",
    etapa: "negociacao",
    valorEstimado: 18000,
    ultimoContato: "2026-11-16",
    anotacoes:
      "Gostou muito da proposta. Pediu 10% de desconto para fechar ainda este mês. Decisora final.",
    temperatura: "quente",
  },
  {
    id: "2",
    nome: "Carlos Henrique Souza",
    empresa: "Souza Materiais de Construção",
    email: "carlos@souzamateriais.com.br",
    telefone: "(31) 98877-1203",
    origem: "Site",
    etapa: "proposta",
    valorEstimado: 9500,
    ultimoContato: "2026-11-12",
    anotacoes:
      "Proposta enviada dia 12. Disse que vai analisar com o sócio. Ainda não respondeu.",
    temperatura: "morno",
  },
  {
    id: "3",
    nome: "Juliana Martins",
    empresa: "JM Arquitetura",
    email: "juliana@jmarquitetura.com",
    telefone: "(11) 97654-3321",
    origem: "LinkedIn",
    etapa: "contato",
    valorEstimado: 6000,
    ultimoContato: "2026-11-14",
    anotacoes:
      "Primeira reunião foi boa. Quer entender melhor os prazos de implantação.",
    temperatura: "morno",
  },
  {
    id: "4",
    nome: "Roberto Almeida",
    empresa: "Almeida Transportes",
    email: "roberto@almeidatransportes.com.br",
    telefone: "(31) 99456-7788",
    origem: "Evento",
    etapa: "novo",
    valorEstimado: 25000,
    ultimoContato: "2026-11-17",
    anotacoes: "Conheci na feira de logística. Pediu para ligar na semana que vem.",
    temperatura: null,
  },
  {
    id: "5",
    nome: "Fernanda Costa",
    empresa: "Bella Moda Boutique",
    email: "fernanda@bellamoda.com.br",
    telefone: "(21) 98123-9090",
    origem: "Instagram",
    etapa: "contato",
    valorEstimado: 3500,
    ultimoContato: "2026-10-28",
    anotacoes:
      "Respondeu uma vez no direct e sumiu. Disse que o orçamento está apertado.",
    temperatura: "frio",
  },
  {
    id: "6",
    nome: "Marcos Vinícius Lima",
    empresa: "Lima & Filhos Contabilidade",
    email: "marcos@limacontabil.com.br",
    telefone: "(31) 99701-5544",
    origem: "Indicação",
    etapa: "fechado",
    valorEstimado: 12000,
    ultimoContato: "2026-11-08",
    anotacoes: "Contrato assinado. Início da implantação em dezembro.",
    temperatura: "quente",
  },
  {
    id: "7",
    nome: "Patrícia Gomes",
    empresa: "Escola Pequeno Saber",
    email: "patricia@pequenosaber.edu.br",
    telefone: "(31) 98345-2211",
    origem: "Site",
    etapa: "proposta",
    valorEstimado: 15000,
    ultimoContato: "2026-11-15",
    anotacoes:
      "Pediu proposta com plano anual. Comparando com mais um fornecedor. Resposta até sexta.",
    temperatura: "quente",
  },
  {
    id: "8",
    nome: "Eduardo Nascimento",
    empresa: "Nascimento Auto Peças",
    email: "eduardo@nascimentoautopecas.com.br",
    telefone: "(31) 99220-3344",
    origem: "LinkedIn",
    etapa: "perdido",
    valorEstimado: 8000,
    ultimoContato: "2026-10-20",
    anotacoes: "Fechou com concorrente por preço. Pode voltar a falar em 6 meses.",
    temperatura: "frio",
  },
  {
    id: "9",
    nome: "Luciana Ferreira",
    empresa: "Doce Sabor Confeitaria",
    email: "luciana@docesabor.com.br",
    telefone: "(11) 96789-4567",
    origem: "Instagram",
    etapa: "novo",
    valorEstimado: 2500,
    ultimoContato: "2026-11-18",
    anotacoes: "Mandou mensagem perguntando preços pelo Instagram.",
    temperatura: null,
  },
  {
    id: "10",
    nome: "Thiago Rocha",
    empresa: "Rocha Imóveis",
    email: "thiago@rochaimoveis.com.br",
    telefone: "(31) 98666-1212",
    origem: "Evento",
    etapa: "negociacao",
    valorEstimado: 22000,
    ultimoContato: "2026-11-05",
    anotacoes:
      "Está negociando prazo de pagamento. Não respondeu as duas últimas mensagens.",
    temperatura: "morno",
  },
];
