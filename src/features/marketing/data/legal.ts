export type LegalSection = {
  title: string
  paragraphs: readonly string[]
}

export const LEGAL_UPDATED_AT = "4 de agosto de 2026"

export const termsSections: readonly LegalSection[] = [
  {
    title: "1. Objeto e aceitação",
    paragraphs: [
      "Estes Termos de Uso regulam o acesso e a utilização do Escolinha Pro, plataforma de software como serviço (SaaS) operada pela Prodexy Labs para apoiar a gestão de instituições de ensino, esporte, atividade física e outras operações com alunos, turmas e cobranças recorrentes.",
      "Ao criar uma conta, a pessoa declara possuir capacidade e poderes para representar a instituição contratante, confirma que leu e aceita estes Termos e a Política de Privacidade nas versões apresentadas. O aceite eletrônico, com data, usuário, instituição e versões dos documentos, poderá ser conservado como evidência da contratação.",
    ],
  },
  {
    title: "2. Definições e partes",
    paragraphs: [
      "Instituição é a pessoa física ou jurídica que contrata e administra uma conta no Escolinha Pro. Usuário é a pessoa autorizada pela instituição a utilizar a plataforma. Aluno e responsável são as pessoas cujos dados são administrados pela instituição. Prodexy Labs é a responsável pela operação tecnológica e comercial do Escolinha Pro.",
      "Os planos, limites, funcionalidades, período de teste, preços e condições comerciais exibidos no momento da contratação integram estes Termos. Serviços complementares, Gestão de Evento, Gestão de Competição e condições Partner podem depender de proposta e instrumento específicos.",
    ],
  },
  {
    title: "3. Funcionalidades e natureza do serviço",
    paragraphs: [
      "A plataforma pode oferecer cadastro de alunos, responsáveis, equipe, polos, locais e turmas; controle de presença; rotinas financeiras; mensalidades; pagamentos; produtos; eventos; relatórios; páginas públicas; integrações e outros recursos compatíveis com o plano contratado.",
      "O Escolinha Pro é disponibilizado pela web e pode ser instalado como aplicativo web progressivo (PWA). A Prodexy Labs poderá atualizar, aprimorar ou substituir componentes para preservar segurança, desempenho, compatibilidade e evolução do produto, sem reduzir arbitrariamente direitos já contratados.",
    ],
  },
  {
    title: "4. Conta, acesso e segurança",
    paragraphs: [
      "A instituição deve fornecer informações verdadeiras, manter os dados atualizados, definir acessos compatíveis com as funções de cada usuário e proteger senhas, dispositivos e credenciais. Contas são pessoais e não devem ser compartilhadas fora das permissões oferecidas pela plataforma.",
      "A instituição deve comunicar imediatamente suspeitas de uso indevido. A Prodexy Labs poderá exigir redefinição de senha, confirmação de identidade ou outras medidas proporcionais e poderá bloquear preventivamente acessos quando houver risco de fraude, incidente, violação destes Termos ou ameaça a terceiros.",
    ],
  },
  {
    title: "5. Obrigações da instituição",
    paragraphs: [
      "A instituição é responsável pela legalidade, exatidão e finalidade dos dados que insere; pela relação com alunos, responsáveis, profissionais e fornecedores; pela definição de valores, vencimentos, descontos, multas, serviços e políticas próprias; e pelo cumprimento das normas educacionais, esportivas, civis, consumeristas, fiscais e de proteção de dados aplicáveis à sua atividade.",
      "Quando houver crianças ou adolescentes, a instituição deve observar o melhor interesse, transparência, necessidade, segurança, autorizações e bases legais adequadas, inclusive a participação dos responsáveis quando exigida. A plataforma não substitui essas obrigações.",
    ],
  },
  {
    title: "6. Planos, teste gratuito e assinatura",
    paragraphs: [
      "A contratação dos planos pagos e o período de teste, quando oferecido, são processados pelo Stripe. A instituição autoriza a cobrança recorrente do valor do plano após o teste, conforme a periodicidade e a forma de pagamento informadas no checkout. Dados completos de cartão são tratados pelo Stripe e não são armazenados pelo Escolinha Pro.",
      "Alterações de plano, limites, renovação, falha de pagamento, cancelamento e reativação seguem as regras apresentadas na plataforma e no portal de cobrança. O cancelamento agendado preserva o acesso até a data indicada, salvo hipótese de suspensão por segurança, fraude, inadimplemento ou violação destes Termos.",
      "Tributos, tarifas de terceiros e serviços não incluídos no plano não estão incorporados à mensalidade do SaaS, salvo indicação expressa. Mudanças futuras de preço serão comunicadas com antecedência razoável e valerão para ciclos posteriores, respeitada a legislação aplicável.",
    ],
  },
  {
    title: "7. Cobranças de alunos e recebimentos por PIX",
    paragraphs: [
      "Conforme o plano, a instituição poderá informar uma chave PIX própria ou conectar sua conta Cora para emitir, consultar e conciliar cobranças. Valores pagos por alunos ou responsáveis são destinados diretamente à conta definida pela instituição.",
      "Na integração Cora, a instituição contrata e mantém diretamente sua conta, acesso à API e demais serviços da Cora, aceita os termos e a política do provedor e arca com mensalidades, tarifas, tributos e custos cobrados pela Cora. A instituição é responsável por fornecer credenciais válidas, configurar a conta corretamente e manter poderes para operá-la.",
      "A Prodexy Labs e o Escolinha Pro não são banco, instituição de pagamento, BaaS, custodiante ou intermediador dos recursos da instituição; não recebem, mantêm nem fazem repasses desses valores. A disponibilidade, liquidação e regras da operação financeira também dependem da Cora, do sistema PIX e das instituições participantes.",
      "A instituição responde pelos valores cobrados, estornos, devoluções, contestações, comprovantes, conciliação contábil e atendimento a alunos e responsáveis. A plataforma poderá automatizar tarefas, mas a instituição deve revisar informações financeiras relevantes antes de adotar medidas contra qualquer pessoa.",
    ],
  },
  {
    title: "8. Dados pessoais e confidencialidade",
    paragraphs: [
      "O tratamento de dados pessoais segue a Política de Privacidade. Em regra, a instituição atua como controladora dos dados operacionais de alunos, responsáveis, equipe e atividades, enquanto a Prodexy Labs atua como operadora para prestar a plataforma. A Prodexy Labs atua como controladora nas atividades próprias de cadastro, segurança, suporte, cumprimento legal e cobrança do SaaS.",
      "Cada parte deve manter confidenciais as informações não públicas a que tiver acesso e adotar medidas adequadas para impedir uso ou divulgação indevidos, sem prejuízo de compartilhamentos necessários à prestação do serviço ou exigidos por lei.",
    ],
  },
  {
    title: "9. Uso permitido e condutas proibidas",
    paragraphs: [
      "É proibido usar a plataforma para fins ilícitos, fraudulentos ou discriminatórios; violar direitos de terceiros; inserir códigos maliciosos; explorar vulnerabilidades; contornar limites; acessar dados de outra instituição; compartilhar credenciais de integração; interferir no serviço; ou utilizar automações não autorizadas que prejudiquem segurança ou disponibilidade.",
      "A violação poderá resultar em limitação, suspensão ou encerramento, sempre de forma proporcional à gravidade e ao risco e sem prejuízo das medidas legais cabíveis.",
    ],
  },
  {
    title: "10. Propriedade intelectual",
    paragraphs: [
      "A plataforma, sua marca, interfaces, documentação, código, bancos de estrutura, elementos visuais e demais ativos são protegidos por direitos de propriedade intelectual. A contratação concede apenas licença limitada, revogável, não exclusiva e intransferível para uso interno durante a vigência da assinatura.",
      "Os dados e conteúdos inseridos pela instituição permanecem sob sua responsabilidade. A instituição concede à Prodexy Labs autorização limitada para hospedar, processar, transmitir, exibir e gerar cópias técnicas desses dados somente para prestar, proteger e dar suporte ao serviço.",
    ],
  },
  {
    title: "11. Disponibilidade, suporte e terceiros",
    paragraphs: [
      "A Prodexy Labs empregará esforços razoáveis para manter o serviço disponível e seguro, mas poderá realizar manutenções e não garante operação ininterrupta diante de internet, dispositivos, provedores, força maior, ataques ou eventos fora de seu controle.",
      "Recursos que dependem de Supabase, Vercel, AWS, Stripe, Cora, serviços de e-mail ou outros fornecedores estão sujeitos à disponibilidade e às regras desses terceiros. A Prodexy Labs buscará reduzir impactos e comunicar indisponibilidades relevantes quando possível.",
    ],
  },
  {
    title: "12. Responsabilidade",
    paragraphs: [
      "Cada parte responde pelos danos diretos que causar por descumprimento de suas obrigações, observadas as provas, a causalidade, os limites legais e as normas de ordem pública. Nada nestes Termos exclui responsabilidade que não possa ser afastada pela legislação brasileira.",
      "A Prodexy Labs não responde por decisões administrativas, pedagógicas, esportivas, financeiras ou disciplinares da instituição; por dados incorretos inseridos por usuários; por falhas de dispositivos e conexões; ou por atos e indisponibilidades de terceiros fora de seu controle razoável.",
    ],
  },
  {
    title: "13. Suspensão, cancelamento e dados",
    paragraphs: [
      "A instituição pode solicitar o cancelamento pelos meios disponibilizados. Após o término do acesso, os dados poderão permanecer retidos pelo período necessário ao cumprimento contratual, legal, regulatório, de auditoria e exercício de direitos, sendo depois eliminados ou anonimizados quando aplicável.",
      "Antes do encerramento, a instituição deve solicitar ou realizar as exportações oferecidas. A eliminação imediata poderá ser recusada quando existir obrigação legal, prevenção a fraude, disputa, dívida, necessidade de segurança ou exercício regular de direitos.",
    ],
  },
  {
    title: "14. Alterações, lei aplicável e contato",
    paragraphs: [
      "Estes Termos poderão ser atualizados para refletir mudanças legais, técnicas ou comerciais. Alterações materiais serão comunicadas e poderão exigir novo aceite. O uso posterior à vigência da nova versão observará a informação apresentada ao usuário e a legislação aplicável.",
      "Aplicam-se as leis da República Federativa do Brasil. Eventuais controvérsias serão submetidas ao foro competente conforme a legislação, preservado o foro do consumidor quando aplicável.",
      "Dúvidas podem ser encaminhadas à Prodexy Labs pelo e-mail prodexy.labs@gmail.com, WhatsApp +55 27 99964-3998 ou site www.prodexylabs.com.br.",
    ],
  },
]

export const privacySections: readonly LegalSection[] = [
  {
    title: "1. Escopo e compromisso",
    paragraphs: [
      "Esta Política explica como dados pessoais são tratados no site, na criação de conta, na plataforma Escolinha Pro, nas páginas públicas e nas integrações relacionadas. Ela deve ser lida com os Termos de Uso e se aplica às atividades realizadas pela Prodexy Labs no contexto do produto.",
      "O aceite desta Política confirma ciência e integra a relação contratual, mas não significa consentimento genérico para todo tratamento. Cada operação utiliza a base legal adequada prevista na Lei Geral de Proteção de Dados Pessoais (LGPD).",
    ],
  },
  {
    title: "2. Agentes de tratamento",
    paragraphs: [
      "Para dados operacionais cadastrados pela instituição, como dados de alunos, responsáveis, equipe, turmas, presença e cobranças, a instituição normalmente atua como controladora, decidindo finalidades e meios essenciais, e a Prodexy Labs atua como operadora, tratando dados conforme o contrato e as instruções legítimas da instituição.",
      "A Prodexy Labs atua como controladora para criar e administrar contas, autenticar usuários, proteger o serviço, prevenir fraude, prestar suporte, cobrar a assinatura, cumprir obrigações legais e gerir sua relação comercial. Alguns fornecedores podem atuar como operadores, suboperadores ou controladores independentes conforme a atividade.",
    ],
  },
  {
    title: "3. Dados tratados",
    paragraphs: [
      "Podemos tratar dados cadastrais e de contato da instituição e de seus usuários; credenciais e registros de autenticação; perfis, permissões e vínculos; dados de alunos, responsáveis e profissionais; polos, locais, turmas, horários, presença e ocorrências; matrículas, mensalidades, descontos, pendências, produtos, eventos e informações de pagamento; solicitações de suporte; logs, IP, dispositivo, navegador, auditoria e segurança.",
      "Também podem ser tratados identificadores de clientes, assinaturas e eventos do Stripe; identificadores de cobranças e PIX da Cora; e configurações e credenciais técnicas necessárias às integrações. O Escolinha Pro não armazena os dados completos do cartão utilizado para pagar a assinatura do SaaS.",
    ],
  },
  {
    title: "4. Origem dos dados",
    paragraphs: [
      "Os dados são fornecidos diretamente pela instituição, usuários, alunos ou responsáveis; gerados pelo uso da plataforma; recebidos de páginas públicas e formulários; ou obtidos de provedores integrados, como Stripe e Cora, dentro das autorizações e configurações aplicáveis.",
      "A instituição deve informar os titulares sobre o uso do Escolinha Pro e assegurar que possui base legal, poderes e autorizações adequadas para cadastrar e tratar os dados sob sua responsabilidade.",
    ],
  },
  {
    title: "5. Finalidades e bases legais",
    paragraphs: [
      "Os dados podem ser tratados para executar o contrato e entregar funcionalidades; autenticar e controlar acessos; processar assinatura e recebimentos configurados; oferecer suporte; comunicar eventos operacionais; prevenir fraude e incidentes; manter auditoria; melhorar desempenho e usabilidade; cumprir obrigações legais e regulatórias; e exercer direitos em processos administrativos, arbitrais ou judiciais.",
      "Conforme o caso, as bases legais incluem execução de contrato e procedimentos preliminares, cumprimento de obrigação legal ou regulatória, exercício regular de direitos, legítimo interesse com avaliação de necessidade e impacto, proteção do crédito, tutela da saúde quando aplicável e consentimento quando ele for efetivamente necessário. Para dados controlados pela instituição, cabe a ela definir e documentar a base legal apropriada.",
    ],
  },
  {
    title: "6. Crianças e adolescentes",
    paragraphs: [
      "A plataforma pode tratar dados de crianças e adolescentes porque atende instituições com atividades infantis e juvenis. Esse tratamento deve observar o melhor interesse, finalidade específica, necessidade, segurança, informação clara e participação do responsável legal quando exigida pela LGPD e pelas demais normas aplicáveis.",
      "A instituição, como controladora desses dados, é responsável por definir a base legal, coletar autorizações cabíveis, limitar acessos e evitar o cadastro de informações excessivas. A Prodexy Labs trata esses dados para prestar e proteger o serviço e não os utiliza para publicidade comportamental direcionada às crianças.",
    ],
  },
  {
    title: "7. Assinatura do SaaS e Stripe",
    paragraphs: [
      "A contratação, o teste gratuito, a cobrança recorrente, o portal de assinatura e determinados dados de pagamento são processados pelo Stripe. Compartilhamos com o Stripe os dados necessários à contratação, como identificação da instituição, e-mail, plano e referência da conta.",
      "O Stripe possui práticas e obrigações próprias de privacidade e pode realizar tratamento e transferência internacional segundo seus documentos aplicáveis. O Escolinha Pro recebe apenas identificadores, status, datas e eventos necessários para liberar, limitar, cancelar ou reconciliar o acesso ao SaaS.",
    ],
  },
  {
    title: "8. Recebimentos da instituição e Cora",
    paragraphs: [
      "Quando a instituição conecta sua conta Cora, o Escolinha Pro pode transmitir e receber os dados necessários para criar, consultar e conciliar cobranças PIX, incluindo identificação do pagador, valor, vencimento, descrição, identificadores da cobrança e status de pagamento.",
      "O Client ID, a chave privada e o certificado da integração Cora são recebidos em área autenticada, validados e armazenados de forma criptografada no servidor. Esses segredos não devem ser exibidos novamente na interface nem incluídos em logs comuns. A instituição deve revogá-los e substituí-los se suspeitar de exposição.",
      "A conta e a API Cora são contratadas diretamente pela instituição. A Cora trata dados segundo seus próprios termos e política e pode atuar como controladora independente das operações bancárias. A Prodexy Labs não recebe, mantém nem repassa os valores pagos por alunos ou responsáveis.",
    ],
  },
  {
    title: "9. Compartilhamento e fornecedores",
    paragraphs: [
      "Dados podem ser compartilhados, no limite necessário, com fornecedores de autenticação e banco de dados, hospedagem e entrega, armazenamento e processamento em nuvem, automações, e-mail, observabilidade, cobrança e pagamentos. Na arquitetura atual, isso pode envolver Supabase, Vercel, Amazon Web Services (AWS), Stripe, Cora e o provedor de e-mail configurado.",
      "Também poderemos compartilhar dados para cumprir lei ou ordem válida, proteger direitos e segurança, investigar fraude, realizar operação societária com salvaguardas ou atender instrução legítima da instituição. Não vendemos dados pessoais.",
    ],
  },
  {
    title: "10. Transferência internacional",
    paragraphs: [
      "Alguns fornecedores podem armazenar ou processar dados fora do Brasil. Nesses casos, buscamos utilizar fornecedores reconhecidos e mecanismos contratuais, técnicos e organizacionais compatíveis com a LGPD e com o nível de proteção exigido para a operação.",
    ],
  },
  {
    title: "11. Retenção e eliminação",
    paragraphs: [
      "Os dados são mantidos enquanto a conta estiver ativa e pelo período necessário às finalidades informadas. Depois, podem ser conservados para cumprir obrigações legais e regulatórias, prevenir fraude, manter segurança, resolver disputas, cobrar valores e exercer direitos, sendo eliminados ou anonimizados quando a retenção deixar de ser necessária.",
      "Prazos podem variar conforme a categoria de dado e a obrigação da instituição. Pedidos de exclusão não produzem efeito sobre dados cuja conservação seja permitida ou obrigatória por lei.",
    ],
  },
  {
    title: "12. Segurança e incidentes",
    paragraphs: [
      "Adotamos medidas técnicas e administrativas proporcionais aos riscos, incluindo segregação por instituição, controle de acesso, políticas de banco, criptografia de credenciais sensíveis, validação de integrações, registros de auditoria e práticas de desenvolvimento seguro. Nenhum sistema, contudo, é absolutamente imune a incidentes.",
      "Em caso de incidente relevante, adotaremos medidas de contenção, investigação e correção e realizaremos as comunicações exigidas à instituição, aos titulares e à Autoridade Nacional de Proteção de Dados, conforme responsabilidades e requisitos legais.",
    ],
  },
  {
    title: "13. Direitos dos titulares",
    paragraphs: [
      "Nos termos da LGPD, o titular pode solicitar, conforme aplicável, confirmação do tratamento, acesso, correção, anonimização, bloqueio ou eliminação, portabilidade, informação sobre compartilhamentos, revisão de decisões automatizadas, oposição e revogação do consentimento.",
      "Solicitações sobre dados administrados por uma instituição devem ser dirigidas primeiro a ela, que é a controladora e pode identificar o vínculo e decidir sobre o pedido. A Prodexy Labs prestará a cooperação técnica necessária. Para atividades em que a Prodexy Labs seja controladora, o pedido pode ser enviado aos contatos abaixo e poderá exigir confirmação segura de identidade.",
    ],
  },
  {
    title: "14. Cookies, métricas e decisões automatizadas",
    paragraphs: [
      "O site e a plataforma podem utilizar cookies e tecnologias necessárias à autenticação, segurança, preferências, desempenho e medição de uso. Métricas agregadas podem ser utilizadas para identificar falhas e melhorar o produto. Configurações do navegador podem limitar cookies não essenciais, mas cookies técnicos são necessários ao funcionamento da conta.",
      "A plataforma pode aplicar regras automáticas de acesso, vencimento, plano, limites, conciliação e alertas. Decisões relevantes sobre pessoas, como medidas disciplinares ou cobrança contestada, permanecem sob responsabilidade da instituição e devem permitir revisão humana adequada.",
    ],
  },
  {
    title: "15. Atualizações e contato",
    paragraphs: [
      "Esta Política poderá ser atualizada por mudanças legais, técnicas ou comerciais. Alterações materiais serão comunicadas e poderão exigir novo aceite, mantendo-se registro da versão aplicável.",
      "Para dúvidas e solicitações de privacidade, contate a Prodexy Labs pelo e-mail prodexy.labs@gmail.com, WhatsApp +55 27 99964-3998 ou site www.prodexylabs.com.br. A identificação jurídica completa do agente responsável deverá constar nos documentos comerciais e cadastrais aplicáveis.",
    ],
  },
]
