import type { Metadata } from "next";
import { IntegrationPage } from "@/features/marketing/components/IntegrationPage";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Rota de integração com o login do Escolinha Pro.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <IntegrationPage mode="login" />;
}
