import { IconType } from "react-icons";

import {
      BsBag,
      BsCloud,
      BsWindowStack,
      BsShopWindow,
      BsGraphUp,
      BsTools,
} from "react-icons/bs";

interface ServicesProps {
      url: string;
      title: string;
      description: string;
      keywords: string[];
      icon: IconType
      styleCard: string;
};

export const servicesData: ServicesProps[] = [
      {
            url: "/services/website",
            title: "Website",
            description: "Desenvolvimento profissional de websites personalizados e sob medida para diversos fins.",
            keywords: ["website", "desenvolvimento", "design atrativo", "experiência do usuário"],
            icon: BsWindowStack,
            styleCard: "h-[300px]"
      },
      {
            url: "/services/ecommerce",
            title: "Ecommerce",
            description: "Criação de lojas online para venda de produtos e serviços, maximizando a conversão de clientes.",
            keywords: ["ecommerce", "loja online", "conversão de visitantes", "experiência de compra"],
            icon: BsShopWindow,
            styleCard: "h-[200px]"
      },
      {
            url: "/services/saas",
            title: "SAAS",
            description: "Desenvolvimento de software como serviço, proporcionando soluções escaláveis e seguras ",
            keywords: ["SAAS", "Software as a Service", "escalabilidade", "segurança", "usabilidade"],
            icon: BsCloud,
            styleCard: "h-[300px]"
      },
      {
            url: "/services/marketplace",
            title: "Marketplace",
            description: "Construção de plataformas para facilitar transações entre compradores e vendedores",
            keywords: ["marketplace", "plataforma de transações", "comércio eletrônico", "gestão eficaz"],
            icon: BsBag,
            styleCard: "h-[200px]"
      },
      {
            url: "/services/seo",
            title: "SEO e Marketing",
            description: "Aumento a visibilidade online do seu negócio com estratégias de SEO e marketing digital",
            keywords: ["SEO", "marketing digital", "visibilidade online", "otimização de conteúdo", "pesquisa de palavras-chave"],
            icon: BsGraphUp,
            styleCard: "h-[300px]"
      },
      {
            url: "/services/support",
            title: "Suporte e Revisão",
            description: "Ofereço suporte técnico e revisões pós entrega, com foco na solução rápida de problemas.",
            keywords: ["suporte técnico", "revisão", "qualidade", "solução rápida de problemas", "melhoria contínua"],
            icon: BsTools,
            styleCard: "h-[200px]"
      },
];