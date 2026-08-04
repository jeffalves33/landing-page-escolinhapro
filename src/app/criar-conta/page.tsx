import type { Metadata } from "next";
import { IntegrationPage } from "@/features/marketing/components/IntegrationPage";

export const metadata: Metadata = {
  title: "Criar conta",
  description: "Rota de integração com o cadastro do Escolinha Pro.",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return <IntegrationPage mode="signup" />;
}
