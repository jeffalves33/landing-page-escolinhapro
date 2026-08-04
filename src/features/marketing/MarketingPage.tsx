import { automationSteps, capabilities, modules, trustItems } from "./data/content";
import { marketingConfig } from "./data/config";
import { planConditions, plans } from "./data/plans";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Icon } from "./components/Icon";
import { Reveal } from "./components/Reveal";
import { SectionHeading } from "./components/SectionHeading";
import { ProductMockup, PhoneMockup } from "./components/ProductMockup";
import { FeatureTour } from "./components/FeatureTour";
import { VideoGallery } from "./components/VideoGallery";
import { FaqAccordion } from "./components/FaqAccordion";
import styles from "./styles/marketing.module.css";

export function MarketingPage() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Escolinha Pro",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, PWA",
    description: "Plataforma web para gestão de alunos, turmas, presenças, mensalidades e financeiro.",
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price,
      priceCurrency: "BRL",
      category: "Assinatura mensal",
    })),
    publisher: { "@type": "Organization", name: "Prodexy Labs", url: marketingConfig.companyUrl },
  };

  return (
    <div className={styles.marketingRoot}>
      <Header />
      <main>
        <Hero />
        <Modules />
        <Experience />
        <Devices />
        <Trust />
        <Pricing />
        <Help />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} />
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroBackdrop} aria-hidden="true"><span/><span/><span/><span/></div>
      <div className={styles.heroInner}>
        <Reveal className={styles.heroCopy}>
          <h1 id="hero-title">Controle e gestão completa sobre seus <em>alunos, mensalidades</em> e <em>eventos.</em></h1>
          <p>Gerencie sua operação em um só lugar, sem depender de planilhas.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={marketingConfig.routes.signup}>Testar grátis por 14 dias <Icon name="arrow"/></a>
            <a className={styles.secondaryButton} href="#planos">Conhecer os planos <Icon name="chevron"/></a>
          </div>
        </Reveal>

        <Reveal className={styles.capabilityRail} delay={120}>
          {capabilities.map((capability) => (
            <article key={capability.title}>
              <i><Icon name={capability.icon}/></i>
              <div><h2>{capability.title}</h2><p>{capability.text}</p></div>
              <span aria-hidden="true"/>
            </article>
          ))}
        </Reveal>

        <Reveal className={styles.heroScene} delay={180}>
          <div className={styles.heroSceneGlow}/>
          <div className={styles.heroDashboard}><ProductMockup variant="overview" /></div>
          <div className={styles.heroPhone}><PhoneMockup screen="attendance" /></div>
          <div className={styles.heroFloatingCardA}>
            <i><Icon name="pix"/></i><span><small>PIX confirmado</small><strong>R$ 299,00</strong><em>Carolina Garcia · agora</em></span>
          </div>
          <div className={styles.heroFloatingCardB}>
            <span>Presença de hoje</span><strong>91%</strong><div><i style={{width:"91%"}}/></div><small>5 turmas concluídas</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section id="funcionalidades" className={styles.modulesSection}>
      <div className={styles.modulesGlow} aria-hidden="true"/>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Uma plataforma, várias rotinas" title="A operação inteira deixa de ser um conjunto de tarefas soltas." text="Cada módulo resolve uma parte da rotina, mas mantém os dados conectados para reduzir retrabalho e ruído." inverse /></Reveal>
        <div className={styles.modulesGrid}>
          {modules.map((module, index) => (
            <Reveal key={module.title} delay={index * 60} className={`${styles.moduleCard} ${styles[`module${module.span[0].toUpperCase()}${module.span.slice(1)}`]}`}>
              <div className={styles.moduleIcon}><Icon name={module.icon}/></div>
              <span>0{index + 1}</span>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
              <a href="#produto" aria-label={`Ver ${module.title}`}>Ver na experiência <Icon name="arrow"/></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Automation() {
  return (
    <section id="automacoes" className={styles.automationSection}>
      <div className={styles.automationLines} aria-hidden="true"><span/><span/><span/></div>
      <div className={styles.sectionContainer}>
        <Reveal className={styles.automationHeader}>
          <span className={styles.eyebrow}>Menos trabalho manual</span>
          <h2>A rotina financeira deixa pistas claras do que aconteceu e do que exige ação.</h2>
          <p>Mensalidades, pagamentos, pendências e custos formam um fluxo compreensível para quem administra — sem linguagem técnica e sem depender de conferências paralelas.</p>
        </Reveal>
        <div className={styles.automationFlow}>
          {automationSteps.map((step, index) => (
            <Reveal className={styles.flowStep} key={step.title} delay={index * 80}>
              <div className={styles.flowNode}><Icon name={step.icon}/><span>0{index + 1}</span></div>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
              {index < automationSteps.length - 1 && <Icon className={styles.flowArrow} name="arrow"/>}
            </Reveal>
          ))}
        </div>
        <Reveal className={styles.automationPanel}>
          <div className={styles.automationPanelCopy}><span>ROTINA AUTOMATIZADA</span><h3>O sistema organiza o caminho. Sua equipe mantém o controle.</h3><p>Regras configuráveis apoiam cobranças, taxas, custos, conciliação e lembretes conforme o plano contratado.</p><a href="#planos">Comparar recursos <Icon name="arrow"/></a></div>
          <div className={styles.automationVisual}>
            <div className={styles.automationOrb}><Icon name="spark"/></div>
            <div className={styles.autoCard} data-pos="one"><Icon name="invoice"/><span><b>Mensalidades geradas</b><small>186 cobranças organizadas</small></span><em>Concluído</em></div>
            <div className={styles.autoCard} data-pos="two"><Icon name="pix"/><span><b>PIX verificado</b><small>Pagamento localizado</small></span><em>Agora</em></div>
            <div className={styles.autoCard} data-pos="three"><Icon name="bell"/><span><b>Lembrete programado</b><small>Conforme recursos do plano</small></span><em>Próxima etapa</em></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="produto" className={styles.experienceSection}>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Experiência do produto" title="Um produto para salvar sua gestão e financeiro." text="Não dependa mais de agendas, planilhas ou dias simplesmente para confirmar pagamentos. Nossa plataforma controla tudo e você se preocupa apenas com operacional." align="center" /></Reveal>
        <FeatureTour />
      </div>
    </section>
  );
}

function Devices() {
  return (
    <section id="dispositivos" className={styles.devicesSection}>
      <div className={styles.devicesBackdrop} aria-hidden="true"/>
      <div className={styles.sectionContainer}>
        <div className={styles.devicesLayout}>
          <Reveal className={styles.devicesCopy}>
            <span className={styles.eyebrow}>para computador e celular</span>
            <h2>Disponibilidade em muitiplas plataformas.</h2>
            <p>Use pelo computador ou celular e instale como aplicativo.</p>
            <ul>
              <li><Icon name="check"/><span><b>Gestão completa no desktop</b><small>Mais espaço para relatórios e administração.</small></span></li>
              <li><Icon name="check"/><span><b>Rotinas rápidas no celular</b><small>Chamadas, consultas e acompanhamento onde a aula acontece.</small></span></li>
              <li><Icon name="check"/><span><b>Instalação simples</b><small>Um atalho com aparência de aplicativo, sem app nativo.</small></span></li>
            </ul>
          </Reveal>
          <Reveal className={styles.devicesScene} delay={100}>
            <div className={styles.desktopDevice}><ProductMockup variant="finance" compact /></div>
            <div className={styles.devicePhone}><PhoneMockup screen="payments" /></div>
            <div className={styles.pwaPrompt}><span className={styles.logoMarkMini}/><div><b>Instalar Escolinha Pro</b><small>Adicionar à tela inicial</small></div><button type="button">Instalar</button></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="confianca" className={styles.trustSection}>
      <div className={styles.trustSpotlight} aria-hidden="true"/>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Confiança operacional" title="Cresça com regras claras." text="A plataforma é simples com uma experiência clara e intuitiva." align="center" inverse /></Reveal>
        <div className={styles.trustGrid}>
          {trustItems.map((item, index) => <Reveal className={styles.trustCard} key={item.title} delay={index * 55}><i><Icon name={item.icon}/></i><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="planos" className={styles.pricingSection}>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Planos transparentes" title="Escolha a estrutura adequada para sua instituição." text="Todos os planos começam com 14 dias de teste gratuito na contratação inicial." align="center" /></Reveal>
        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <Reveal className={`${styles.planCard} ${plan.highlighted ? styles.planHighlighted : ""}`} key={plan.name} delay={index * 80}>
              {plan.highlighted && <span className={styles.planBadge}>Mais escolhido</span>}
              <div className={styles.planTop}><span>{plan.name}</span><p>{plan.description}</p><div className={styles.planPrice}><sup>R$</sup><strong>{plan.price}</strong><small>/mês</small></div><em>{plan.audience}</em></div>
              <a className={plan.highlighted ? styles.primaryButton : styles.planButton} href={marketingConfig.routes.signup}>Testar grátis <Icon name="arrow"/></a>
              <div className={styles.planFeatures}><b>O que está incluído</b><ul>{plan.features.map((feature) => <li key={feature}><Icon name="check"/>{feature}</li>)}</ul></div>
            </Reveal>
          ))}
        </div>
        <Reveal className={styles.planConditions}><div><Icon name="card"/><span><b>Condições comerciais</b><small>Informações importantes antes da contratação.</small></span></div><ul>{planConditions.map((condition) => <li key={condition}>{condition}</li>)}</ul></Reveal>
      </div>
    </section>
  );
}

function Help() {
  return (
    <section id="ajuda" className={styles.helpSection}>
      <div className={styles.sectionContainer}>
        <Reveal><SectionHeading eyebrow="Documentação e ajuda" title="Aprenda cada rotina em conteúdos curtos e objetivos." text="Uma experiência acessível não termina na interface. O conteúdo de apoio precisa orientar pessoas com diferentes níveis de familiaridade tecnológica." /></Reveal>
        <VideoGallery />
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="duvidas" className={styles.faqSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.faqLayout}>
          <Reveal className={styles.faqIntro}><span className={styles.eyebrow}>Dúvidas frequentes</span><h2>Respostas diretas antes de você começar.</h2><p>Não encontrou sua dúvida?</p><a href={`mailto:${marketingConfig.email}`}>Enviar um e-mail <Icon name="arrow"/></a></Reveal>
          <Reveal delay={100}><FaqAccordion /></Reveal>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.finalCtaGlow} aria-hidden="true"/>
      <div className={styles.sectionContainer}>
        <Reveal className={styles.finalCta}>
          <span>PRÓXIMO PASSO</span>
          <h2>Sua instituição pode crescer sem perder o controle da rotina.</h2>
          <p>Centralize a operação, reduza tarefas manuais e ofereça uma experiência mais organizada para equipe, alunos e responsáveis.</p>
          <div><a className={styles.lightButton} href={marketingConfig.routes.signup}>Testar grátis por 14 dias <Icon name="arrow"/></a></div>
        </Reveal>
      </div>
    </section>
  );
}
