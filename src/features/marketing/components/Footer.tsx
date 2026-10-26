import { marketingConfig } from "../data/config";
import { Logo } from "./Logo";
import styles from "../styles/marketing.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGlow} />
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Logo inverse />
          <p>Gestão acessível para instituições que precisam organizar alunos, mensalidades e eventos sem depender de processos espalhados.</p>
          <span>Um produto da <a href={marketingConfig.companyUrl} target="_blank" rel="noreferrer">Prodexy Labs</a>.</span>
        </div>
        <div className={styles.footerColumns}>
          <div><b>Produto</b><a href="#produto">Experiência</a><a href="#funcionalidades">Funcionalidades</a><a href="#automacoes">Automações</a><a href="#planos">Plano</a></div>
          <div><b>Documentação</b><a href="#ajuda">Vídeos e guias</a><a href="#duvidas">Dúvidas frequentes</a><a href={`mailto:${marketingConfig.email}`}>E-mail</a><a href={marketingConfig.companyUrl} target="_blank" rel="noreferrer">Prodexy Labs</a></div>
          <div><b>Acesso</b><a href={marketingConfig.routes.login}>Entrar</a><a href={marketingConfig.routes.signup}>Criar conta</a><a href={marketingConfig.routes.terms}>Termos</a><a href={marketingConfig.routes.privacy}>Privacidade</a></div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Prodexy Labs. Todos os direitos reservados.</span>
        <span>Use pelo computador ou celular e instale como aplicativo.</span>
      </div>
    </footer>
  );
}
