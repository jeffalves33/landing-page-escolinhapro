export const navigation = [
  { label: "Produto", href: "#produto" },
  { label: "Planos", href: "#planos" },
  { label: "Documentação", href: "#ajuda" },
] as const;

export const capabilities = [
  { icon: "users", title: "Gestão de alunos", text: "Cadastros e responsáveis em um só lugar." },
  { icon: "calendar", title: "Presenças e turmas", text: "Agenda e chamadas sem papel." },
  { icon: "wallet", title: "Cobranças organizadas", text: "Mensalidades, PIX e pendências visíveis." },
  { icon: "phone", title: "Acesso pelo celular", text: "Use no navegador e instale como PWA." },
] as const;

export const modules = [
  { icon: "users", title: "Alunos e responsáveis", text: "Cadastros completos, vínculos familiares e histórico centralizado.", span: "wide" },
  { icon: "school", title: "Turmas e professores", text: "Organize horários, modalidades, polos e equipe.", span: "normal" },
  { icon: "check", title: "Chamadas e presença", text: "Registre a aula pelo celular e acompanhe frequência.", span: "normal" },
  { icon: "pix", title: "Mensalidades e PIX", text: "Controle vencimentos, pendências e recebimentos.", span: "normal" },
  { icon: "chart", title: "Financeiro", text: "Custos, entradas e visão consolidada da instituição.", span: "normal" },
  { icon: "bag", title: "Produtos e eventos", text: "Apoie vendas, ações e eventos simples sem planilhas paralelas.", span: "wide" },
] as const;

export const automationSteps = [
  { icon: "invoice", title: "Mensalidade criada", text: "Valores, vencimento e regras configuradas pela instituição." },
  { icon: "pix", title: "Pagamento acompanhado", text: "PIX e conciliação organizados no mesmo fluxo." },
  { icon: "alert", title: "Pendência visível", text: "A equipe identifica rapidamente o que precisa de atenção." },
  { icon: "chart", title: "Fechamento claro", text: "Custos e recebimentos formam uma visão financeira útil." },
] as const;

export const tourSteps = [
  {
    id: "alunos",
    kicker: "Base organizada",
    title: "Alunos, responsáveis e cobranças conectados.",
    text: "Consulte dados importantes sem alternar entre arquivos, mensagens e planilhas. Cada vínculo permanece próximo do contexto financeiro.",
    bullets: ["Busca rápida", "Responsáveis vinculados", "Situação financeira visível"],
  },
  {
    id: "presenca",
    kicker: "Rotina da aula",
    title: "Professores registram chamadas sem interromper a turma.",
    text: "A experiência foi pensada para funcionar no celular: poucos passos, alvos claros e retorno visual imediato.",
    bullets: ["Lista por turma", "Presença em poucos toques", "Histórico por aluno"],
  },
  {
    id: "financeiro",
    kicker: "Visão administrativa",
    title: "Financeiro traduzido em decisões simples.",
    text: "Acompanhe recebimentos, custos e pendências com hierarquia visual, sem transformar a operação em um painel técnico difícil de interpretar.",
    bullets: ["Resumo mensal", "Pendências priorizadas", "Custos e saldo"],
  },
] as const;

export const trustItems = [
  { icon: "layers", title: "Dados separados", text: "Cada instituição opera em seu próprio ambiente lógico." },
  { icon: "shield", title: "Perfis e acessos", text: "Crie perfis de acesso para professores e outros membros da equipe." },
  { icon: "history", title: "Histórico de operações", text: "Ações importantes podem ser rastreadas para apoiar a gestão." },
  { icon: "settings", title: "Configuração própria", text: "Regras e rotinas são ajustadas por instituição." },
  { icon: "support", title: "Suporte", text: "Atendimento direto para implantação e dúvidas." },
  { icon: "card", title: "Assinatura segura", text: "Cancele e atualize suas informações quando quiser." },
] as const;

export const videoItems = [
  { title: "Primeiros passos", duration: "Tutorial em preparação", status: "available", icon: "rocket" },
  { title: "Como organizar turmas", duration: "Tutorial em preparação", status: "soon", icon: "school" },
  { title: "Como configurar cobranças", duration: "Tutorial em preparação", status: "soon", icon: "wallet" },
  { title: "Como registrar chamadas", duration: "Tutorial em preparação", status: "soon", icon: "check" },
  { title: "Como acompanhar o financeiro", duration: "Tutorial em preparação", status: "soon", icon: "chart" },
] as const;

export const faqs = [
  { q: "Preciso instalar alguma coisa?", a: "Não. O Escolinha Pro funciona no navegador. No celular, você também pode instalar o atalho como aplicativo PWA, sem depender de App Store ou Google Play." },
  { q: "Funciona no celular?", a: "Sim. As rotinas principais são responsivas e podem ser usadas pelo navegador do celular. A experiência também pode ser instalada como PWA." },
  { q: "Posso testar antes de pagar?", a: "Sim. A contratação inicial oferece 14 dias de teste gratuito para conhecer a plataforma." },
  { q: "O teste exige cartão?", a: "Sim. O cartão é necessário para iniciar o teste. As condições são apresentadas antes da confirmação da contratação." },
  { q: "Como recebo as mensalidades?", a: "A instituição configura sua operação de recebimentos. O sistema organiza cobranças, PIX, vencimentos, conciliação e pendências conforme os recursos do plano." },
  { q: "Consigo cancelar?", a: "Sim. As regras de cancelamento e vigência ficam detalhadas nos termos comerciais e na contratação." },
  { q: "Meus dados ficam separados de outras instituições?", a: "Sim. O produto foi projetado para separar os dados e configurações de cada instituição." },
  { q: "Posso mudar de plano?", a: "Sim. A mudança depende dos limites e recursos necessários para a sua operação." },
  { q: "O sistema serve para quem?", a: "A comunicação atende ginástica, dança, futebol, futevôlei, natação, vôlei, artes marciais, estúdios, academias e outras atividades recorrentes." },
] as const;
