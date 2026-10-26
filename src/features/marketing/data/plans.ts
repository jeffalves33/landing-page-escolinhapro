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
    name: "Gestão",
    price: 119.9,
    description: "Gestão completa para instituições que querem organizar operação e financeiro em um só lugar.",
    audience: "Até 700 alunos ativos · Polos ilimitados",
    limits: ["Até 700 alunos ativos", "Polos ilimitados"],
    features: [
      "Gestão de alunos, turmas e professores",
      "Chamadas, mensalidades e recebimentos",
      "Eventos simples e conciliação",
      "Portal completo",
      "Catálogo de produtos",
      "Taxa automática por atraso",
      "Lembretes",
      "Gestão financeira completa",
      "Relatórios avançados",
    ],
    highlighted: true,
  },
];

export const planConditions = [
  "14 dias de teste gratuito na contratação inicial",
  "Cartão necessário para iniciar o teste",
  "Gestão de Evento é um produto separado",
  "Gestão de Competição possui condição comercial especial",
  "Contratos Partner e especiais são tratados sob consulta",
] as const;
