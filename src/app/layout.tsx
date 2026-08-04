import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.escolinhapro.com"),
  title: {
    default: "Escolinha Pro | Gestão de alunos, mensalidades e eventos",
    template: "%s | Escolinha Pro",
  },
  description:
    "Organize alunos, turmas, presenças, mensalidades e financeiro em uma plataforma web acessível pelo computador ou celular.",
  applicationName: "Escolinha Pro",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Escolinha Pro",
    title: "Escolinha Pro | Sua instituição organizada em um só lugar",
    description:
      "Gestão simples de alunos, aulas, cobranças e rotina financeira para escolas esportivas, estúdios e professores.",
    images: [
      {
        url: "/marketing/images/og-escolinha-pro.png",
        width: 1200,
        height: 630,
        alt: "Escolinha Pro em computador e celular",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escolinha Pro | Gestão de alunos, mensalidades e eventos",
    description:
      "Use pelo computador ou celular e instale como aplicativo.",
    images: ["/marketing/images/og-escolinha-pro.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/marketing/images/brand-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
