import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Icon } from "./Icon";
import { marketingConfig } from "../data/config";
import styles from "../styles/marketing.module.css";

export function IntegrationPage({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  return (
    <div className={styles.marketingRoot}>
      <Header />
      <main className={styles.integrationMain}>
        <div className={styles.integrationCard}>
          <span className={styles.integrationIcon}><Icon name={isLogin ? "lock" : "rocket"} /></span>
          <span className={styles.eyebrow}>{isLogin ? "Acesso ao SaaS" : "Criação de conta"}</span>
          <h1>{isLogin ? "Rota pronta para receber o login existente." : "Rota pronta para receber o cadastro existente."}</h1>
          <p>
            Este projeto entrega apenas o módulo público de marketing. A autenticação deve permanecer no SaaS principal e substituir esta página durante a integração.
          </p>
          <div>
            <Link className={styles.primaryButton} href="/">Voltar para a página inicial <Icon name="arrow" /></Link>
            <a className={styles.secondaryButton} href={marketingConfig.whatsappUrl} target="_blank" rel="noreferrer">Falar com a Prodexy Labs</a>
          </div>
          <small>Nenhuma autenticação paralela foi criada neste projeto.</small>
        </div>
      </main>
      <Footer />
    </div>
  );
}
