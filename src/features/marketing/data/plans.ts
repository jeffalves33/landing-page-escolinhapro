export type Plan = {
  name: string;
  price: number;
  description: string;
  audience: string;
  limits: string[];
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Essencial",
    price: 129,
    description: "Para operações menores que precisam abandonar planilhas e centralizar a rotina.",
    audience: "Até 150 alunas ativas · 1 polo",
    limits: ["Até 150 alunas ativas", "1 polo"],
    features: [
      "Gestão de alunos, turmas e professoras",
      "Chamadas e presença",
      "Mensalidades",
      "PIX renovável",
      "Portal básico",
    ],
  },
  {
    name: "Profissional",
    price: 299,
    description: "Para instituições em crescimento que precisam controlar operação e recebimentos.",
    audience: "Até 400 alunas ativas · Até 2 polos",
    limits: ["Até 400 alunas ativas", "Até 2 polos"],
    features: [
      "Todos os recursos do Essencial",
      "Custos mensais",
      "Eventos simples",
      "Conciliação de pagamentos",
      "Portal completo",
    ],
    highlighted: true,
  },
  {
    name: "Gestão",
    price: 499,
    description: "Para estruturas maiores que exigem visão financeira completa e múltiplos polos.",
    audience: "Até 700 alunas ativas · Polos ilimitados",
    limits: ["Até 700 alunas ativas", "Polos ilimitados"],
    features: [
      "Todos os recursos do Profissional",
      "Catálogo de produtos",
      "Taxa automática por atraso",
      "Lembretes",
      "Gestão financeira completa",
      "Relatórios avançados",
    ],
  },
];

export const planConditions = [
  "14 dias de teste gratuito na contratação inicial",
  "Cartão necessário para iniciar o teste",
  "Gestão de Evento é um produto separado",
  "Gestão de Competição possui condição comercial especial",
  "Contratos Partner e especiais são tratados sob consulta",
] as const;
