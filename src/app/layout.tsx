import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";

const inter = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Programador Freelancer | Contratos Mensais: Planos Basic e Standard | Felipe Antoniati",
  description: "Especialista em Next.js, React.js, JavaScript e TypeScript, transformo conceitos em realidade digital.  Com conhecimento sólido em MongoDB, SQL, ORM's, Next Auth e Kinde, construo soluções poderosas e seguras. Do conceito à implementação, meu foco é superar expectativas, impulsionando ecommerces, marktplaces, SAAS e websites modernos para o sucesso.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="light:bg-white text-slate-800 antialiased"
    >
      <body className={inter.className}>
        {children}
      </body>
    </html >
  );
};