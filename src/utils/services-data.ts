import { IconType } from "react-icons";

import {
      BsBagFill,
      BsCloudFill,
      BsWindowStack,
      BsShopWindow,
      BsGraphUp,
      BsTools,
} from "react-icons/bs";

interface ServicesProps {
      title: string;
      description: string;
      keywords: string[];
      icon: IconType
      heigthCard: string;
};

export const servicesData: ServicesProps[] = [
      {
            title: "Website",
            description: "Desenvolvimento profissional de websites para diversos fins, garanto design atrativo, funcionalidades avançadas e experiência do usuário excepcional.",
            keywords: ["website", "desenvolvimento", "design atrativo", "experiência do usuário"],
            icon: BsWindowStack,
            heigthCard: "h-[300px]"      
      },
      {
            title: "Ecommerce",
            description: "Criação de lojas online para venda de produtos e serviços, com foco em maximizar a conversão de visitantes em clientes e otimizar a experiência de compra.",
            keywords: ["ecommerce", "loja online", "conversão de visitantes", "experiência de compra"],
            icon: BsShopWindow,
            heigthCard: "h-[200px]"      
      },
      {
            title: "SAAS",
            description: "Desenvolvimento de Software as a Service (SAAS) personalizado, com ênfase na escalabilidade, segurança e usabilidade para atender às necessidades do seu negócio.",
            keywords: ["SAAS", "Software as a Service", "escalabilidade", "segurança", "usabilidade"],
            icon: BsCloudFill,
            heigthCard: "h-[300px]"      
      },
      {
            title: "Marketplace",
            description: "Construção de plataformas para facilitar transações entre compradores e vendedores, com soluções flexíveis e robustas para gerenciar operações de comércio eletrônico.",
            keywords: ["marketplace", "plataforma de transações", "comércio eletrônico", "gestão eficaz"],
            icon: BsBagFill,
            heigthCard: "h-[200px]"      
      },
      {
            title: "SEO e Marketing",
            description: "Aumento a visibilidade online do seu negócio com estratégias de SEO e marketing digital, incluindo otimização de conteúdo, pesquisa de palavras-chave e análise de concorrência.",
            keywords: ["SEO", "marketing digital", "visibilidade online", "otimização de conteúdo", "pesquisa de palavras-chave"],
            icon: BsGraphUp,
            heigthCard: "h-[300px]"      
      },
      {
            title: "Suporte e Revisão",
            description: "Ofereço suporte técnico contínuo e revisões para garantir o desempenho, qualidade e segurança do seu projeto, com foco na solução rápida de problemas.",
            keywords: ["suporte técnico", "revisão", "qualidade", "solução rápida de problemas", "melhoria contínua"],
            icon: BsTools,
            heigthCard: "h-[200px]"      
      },
];