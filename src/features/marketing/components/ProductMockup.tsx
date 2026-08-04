import { Icon } from "./Icon";
import styles from "../styles/marketing.module.css";

type Variant = "overview" | "students" | "attendance" | "finance";

const students = [
  { name: "Lívia Martins", group: "Ginastica Infantil A", responsible: "Paula Martins", status: "Em dia", tone: "ok" },
  { name: "Carolina Garcia", group: "Jazz Kids B", responsible: "Renata Costa", status: "Pendente", tone: "warn" },
  { name: "Sofia Almeida", group: "GR Juvenil", responsible: "Eduardo Almeida", status: "Em dia", tone: "ok" },
  { name: "Clara Ribeiro", group: "Baby Class A", responsible: "Luciana Ribeiro", status: "Em dia", tone: "ok" },
];

const quickModules = [
  { icon: "layers" as const, label: "Polos", value: "6 unidades" },
  { icon: "pin" as const, label: "Locais", value: "14 salas" },
  { icon: "school" as const, label: "Turmas", value: "32 ativas" },
  { icon: "users" as const, label: "Alunas", value: "512 ativas" },
  { icon: "teacher" as const, label: "Professoras", value: "28 perfis" },
  { icon: "wallet" as const, label: "Financeiro", value: "Julho" },
  { icon: "alert" as const, label: "Cobranças", value: "18 atrasos" },
  { icon: "bag" as const, label: "Produtos", value: "12 itens" },
];

export function ProductMockup({ variant = "overview", compact = false }: { variant?: Variant; compact?: boolean }) {
  const active = variant === "overview" ? "dashboard" : variant === "students" ? "students" : variant === "attendance" ? "classes" : "finance";

  return (
    <div className={`${styles.productWindow} ${compact ? styles.productWindowCompact : ""}`} aria-label={`Ilustração cenográfica da plataforma Escolinha Pro: ${variant}`}>
      <div className={styles.windowTopbar}>
        <div className={styles.windowDots}><span/><span/><span/></div>
        <div className={styles.windowAddress}>escolinhapro.com</div>
        <div className={styles.windowUser}>P</div>
      </div>
      <div className={styles.appShell}>
        <aside className={styles.appSidebar}>
          <div className={styles.appBrand}><span className={styles.miniMark}/><b>Escolinha Pro</b></div>
          <span className={styles.appNavSection}>GERAL</span>
          <nav>
            <span className={active === "dashboard" ? styles.appNavActive : ""}><Icon name="chart"/>Dashboard</span>
          </nav>
          <span className={styles.appNavSection}>GESTÃO</span>
          <nav>
            <span><Icon name="layers"/>Polos</span>
            <span className={active === "classes" ? styles.appNavActive : ""}><Icon name="school"/>Turmas</span>
            <span className={active === "students" ? styles.appNavActive : ""}><Icon name="users"/>Alunas</span>
            <span><Icon name="teacher"/>Professoras</span>
          </nav>
          <span className={styles.appNavSection}>FINANCEIRO</span>
          <nav>
            <span className={active === "finance" ? styles.appNavActive : ""}><Icon name="wallet"/>Financeiro</span>
            <span><Icon name="alert"/>Cobranças</span>
          </nav>
          <div className={styles.sidebarInstitution}><span>Ambiente</span><strong>Demonstração segura</strong></div>
        </aside>
        <main className={styles.appMain}>
          {variant === "overview" && <Overview />}
          {variant === "students" && <Students />}
          {variant === "attendance" && <Attendance />}
          {variant === "finance" && <Finance />}
        </main>
      </div>
    </div>
  );
}

function AppHeader({ title, description, action }: { title: string; description: string; action?: string }) {
  return (
    <div className={styles.appHeader}>
      <div><span>Julho de 2026</span><h3>{title}</h3><p>{description}</p></div>
      {action && <button type="button">{action}</button>}
    </div>
  );
}

function Overview() {
  return (
    <>
      <AppHeader title="Painel administrativo" description="Visão operacional e financeira da instituição." action="Nova aluna" />
      <div className={`${styles.metricGrid} ${styles.metricGridFour}`}>
        <Metric label="Alunas ativas" value="512" delta="+12% no mês" icon="users" />
        <Metric label="Professoras" value="28" delta="+2 novos perfis" icon="school" />
        <Metric label="Polos" value="6" delta="Sem alterações" icon="layers" />
        <Metric label="Locais" value="14" delta="+2 no mês" icon="pin" />
      </div>
      <div className={styles.dashboardGrid}>
        <section className={styles.chartCard}>
          <div className={styles.cardTitle}><div><span>FINANCEIRO</span><strong>Receitas e despesas</strong></div><small>Julho</small></div>
          <div className={styles.financeSummaryStrip}>
            <span><small>Receitas</small><b>R$ 78.250</b></span>
            <span><small>Despesas</small><b>R$ 24.530</b></span>
            <span><small>Saldo</small><b>R$ 53.720</b></span>
          </div>
          <div className={styles.lineChart} aria-hidden="true">
            <svg viewBox="0 0 420 120" preserveAspectRatio="none">
              <path className={styles.lineGrid} d="M0 28H420M0 60H420M0 92H420"/>
              <path className={styles.lineGreen} d="M0 102 C42 90,55 72,92 76 S138 42,178 49 S228 24,270 39 S334 18,420 12"/>
              <path className={styles.lineRed} d="M0 110 C42 104,65 91,96 96 S151 79,190 83 S245 61,282 72 S344 55,420 51"/>
            </svg>
          </div>
          <div className={styles.chartAxis}><span>01 Jul</span><span>08 Jul</span><span>15 Jul</span><span>22 Jul</span><span>29 Jul</span></div>
        </section>
        <section className={styles.quickAccessCard}>
          <div className={styles.cardTitle}><div><span>ACESSO RÁPIDO</span><strong>Principais módulos</strong></div></div>
          <div className={styles.quickAccessGrid}>
            {quickModules.map((item) => (
              <div className={styles.quickAccessItem} key={item.label}>
                <i><Icon name={item.icon}/></i>
                <span><b>{item.label}</b><small>{item.value}</small></span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function Students() {
  return (
    <>
      <AppHeader title="Alunas e responsáveis" description="Cadastros, vínculos e situação financeira." action="Cadastrar aluna" />
      <div className={styles.listToolbar}><div><Icon name="search"/><span>Buscar por nome, turma ou responsável</span></div><button type="button">Todos os polos</button></div>
      <section className={styles.tableCard}>
        <div className={styles.tableHead}><span>Aluna</span><span>Turma</span><span>Responsável</span><span>Situação</span></div>
        {students.map((student) => (
          <div className={styles.tableRow} key={student.name}>
            <span className={styles.studentName}><i>{student.name.slice(0, 2).toUpperCase()}</i><b>{student.name}</b></span>
            <span>{student.group}</span>
            <span>{student.responsible}</span>
            <span><em data-tone={student.tone}>{student.status}</em></span>
          </div>
        ))}
      </section>
      <div className={styles.studentBottomGrid}>
        <section><span>Cadastros ativos</span><strong>512 alunas</strong><small>36 novas nos últimos 30 dias</small></section>
        <section><span>Pendências cadastrais</span><strong>7</strong><small>Documentos ou contatos incompletos</small></section>
      </div>
    </>
  );
}

function Attendance() {
  const names = ["Lívia Martins", "Carolina Garcia", "Sofia Almeida", "Clara Ribeiro", "Isabela Rocha"];
  return (
    <>
      <AppHeader title="Chamada — Ginastica Infantil A" description="Terça-feira · 14:00 às 15:00 · Polo Centro" action="Concluir chamada" />
      <div className={styles.attendanceSummary}>
        <div><span>Alunas</span><strong>18</strong></div><div><span>Presentes</span><strong>16</strong></div><div><span>Presença</span><strong>89%</strong></div>
      </div>
      <section className={styles.attendanceList}>
        {names.map((name, index) => (
          <div key={name}>
            <span className={styles.studentName}><i>{name.slice(0,2).toUpperCase()}</i><span><b>{name}</b><small>{index === 1 ? "Observação cadastrada" : "Matrícula ativa"}</small></span></span>
            <span className={styles.presenceToggle}><button className={index === 3 ? "" : styles.presenceActive} type="button">Presente</button><button className={index === 3 ? styles.absenceActive : ""} type="button">Ausente</button></span>
          </div>
        ))}
      </section>
    </>
  );
}

function Finance() {
  return (
    <>
      <AppHeader title="Financeiro" description="Receitas, matrículas, custos e salários por período." action="Exportar CSV" />
      <div className={styles.financeFilters}><span>Julho de 2026</span><span>Todos os polos</span><span>Todos os locais</span></div>
      <div className={`${styles.metricGrid} ${styles.metricGridThree}`}>
        <Metric label="Receitas" value="R$ 78.250" delta="+18,6% vs. junho" icon="wallet" />
        <Metric label="Despesas" value="R$ 24.530" delta="+12,4% vs. junho" icon="invoice" />
        <Metric label="Saldo" value="R$ 53.720" delta="+21,3% vs. junho" icon="chart" />
      </div>
      <div className={styles.financeGrid}>
        <section className={styles.chartCard}>
          <div className={styles.cardTitle}><div><span>FLUXO FINANCEIRO</span><strong>Últimos 6 meses</strong></div><small>Mensalidades</small></div>
          <div className={styles.lineChart} aria-hidden="true">
            <svg viewBox="0 0 420 120" preserveAspectRatio="none">
              <path className={styles.lineGrid} d="M0 28H420M0 60H420M0 92H420"/>
              <path className={styles.lineGreen} d="M0 92 C45 86,70 68,110 70 S160 42,205 46 S260 22,310 31 S360 16,420 8"/>
              <path className={styles.linePurple} d="M0 105 C48 97,76 82,116 85 S166 63,208 67 S270 44,314 52 S366 34,420 28"/>
              <path className={styles.lineRed} d="M0 112 C48 108,74 98,116 101 S170 88,212 92 S270 75,315 81 S370 66,420 62"/>
            </svg>
          </div>
          <div className={styles.chartAxis}><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul</span></div>
        </section>
        <section className={styles.donutCard}>
          <div className={styles.cardTitle}><div><span>RECEBIMENTOS</span><strong>Status do período</strong></div></div>
          <div className={styles.donutWrap}><div className={styles.donut}><span><b>92%</b><small>recebido</small></span></div><ul><li><i data-c="a"/>Recebido <b>R$ 72.140</b></li><li><i data-c="b"/>Pendente <b>R$ 6.110</b></li><li><i data-c="c"/>Atrasado <b>R$ 1.840</b></li></ul></div>
        </section>
      </div>
    </>
  );
}

function Metric({ label, value, delta, icon }: { label: string; value: string; delta: string; icon: "users" | "wallet" | "check" | "clock" | "invoice" | "school" | "layers" | "support" | "chart" | "pin" | "teacher" }) {
  return <section className={styles.metricCard}><div><span>{label}</span><strong>{value}</strong><small>{delta}</small></div><i><Icon name={icon}/></i></section>;
}

export function PhoneMockup({ screen = "attendance" }: { screen?: "attendance" | "payments" | "home" }) {
  return (
    <div className={styles.phoneFrame} aria-label="Ilustração da versão mobile do Escolinha Pro">
      <div className={styles.phoneSpeaker}/>
      <div className={styles.phoneScreen}>
        <div className={styles.phoneStatus}><span>09:41</span><span>● ◒ ▰</span></div>
        <div className={styles.phoneAppHeader}><span className={styles.miniMark}/><b>Escolinha Pro</b><i>P</i></div>
        {screen === "attendance" && <PhoneAttendance />}
        {screen === "payments" && <PhonePayments />}
        {screen === "home" && <PhoneHome />}
        <div className={styles.phoneNav}><span className={styles.phoneNavActive}><Icon name="chart"/>Início</span><span><Icon name="school"/>Turmas</span><span><Icon name="users"/>Alunas</span><span><Icon name="bell"/>Avisos</span></div>
      </div>
    </div>
  );
}

function PhoneAttendance() {
  return <div className={styles.phoneBody}><span className={styles.phoneKicker}>CHAMADA DE HOJE</span><h4>Ginastica Infantil A</h4><p>14:00 · Polo Centro</p><div className={styles.phoneProgress}><b>16 presentes de 18</b><span><i style={{width:"89%"}}/></span></div>{["Lívia Martins","Carolina Garcia","Sofia Almeida"].map((n,i)=><div className={styles.phoneStudent} key={n}><i>{n.slice(0,2).toUpperCase()}</i><span><b>{n}</b><small>{i===1?"Ausente":"Presente"}</small></span><button data-off={i===1}>✓</button></div>)}<button className={styles.phonePrimary}>Concluir chamada</button></div>;
}
function PhonePayments() {
  return <div className={styles.phoneBody}><span className={styles.phoneKicker}>FINANCEIRO · JULHO</span><h4>R$ 78.250</h4><p>Receitas do período</p><div className={styles.phoneFinanceRow}><span><small>Despesas</small><b>R$ 24.530</b></span><span><small>Saldo</small><b>R$ 53.720</b></span></div><div className={styles.phoneHeroMetric}><span>Taxa de recebimento</span><strong>92%</strong><small>R$ 72.140 recebidos</small></div>{["PIX confirmado","Mensalidade pendente","Custo registrado"].map((n,i)=><div className={styles.phoneEvent} key={n}><i><Icon name={i===0?"pix":i===1?"alert":"invoice"}/></i><span><b>{n}</b><small>{["Lívia Martins · agora","Carolina Garcia · há 2h","Aluguel · ontem"][i]}</small></span></div>)}</div>;
}
function PhoneHome() {
  return <div className={styles.phoneBody}><span className={styles.phoneKicker}>OLÁ, ADMINISTRADOR</span><h4>Resumo de hoje</h4><p>Operação da instituição</p><div className={styles.phoneMiniGrid}><div><Icon name="users"/><b>512</b><small>alunas</small></div><div><Icon name="school"/><b>32</b><small>turmas</small></div></div><div className={styles.phoneNext}><span>Próxima turma</span><strong>Ginastica Infantil A</strong><small>14:00 · 18 alunas</small><button>Iniciar chamada</button></div></div>;
}
