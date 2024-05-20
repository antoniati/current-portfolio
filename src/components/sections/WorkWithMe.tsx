"use client";

import { Button, Flex, Grid } from "@tremor/react";
import { AnimBottomToTop } from "../animations/AnimBottomToTop";
import { SessionHeader } from "../headers/SessionHeader";
import { BsChevronDoubleRight } from "react-icons/bs";

export const WorkWithMe = () => {
      return (
            <section className="main-container">
                  <SessionHeader textDivider="Contratar o programador certo é essencial" title="Porque Escolher Meus Serviços ?" />
                  <Flex className="w-full flex-col lg:flex-row">
                        <Flex className="items-center sm:items-start flex-col">
                              <ul className="space-y-4 mt-2 md:mt-6">
                                    <li className="text-[16px] md:text-[18px] text-center sm:text-start leading-7">
                                          <span className="font-medium"> &raquo; Experiência e Expertise:</span> Com mais de 7 anos de experiência em desenvolvimento web, possuo certificações em HTML, CSS, JavaScript, Web Design e SEO. Estou capacitado para oferecer soluções inovadoras e eficazes.
                                    </li>
                                    <li className="text-[16px] md:text-[18px] text-center sm:text-start leading-7">
                                          <span className="font-medium"> &raquo; Tecnologias Modernas:</span> Utilizo as tecnologias mais avançadas do setor, incluindo Next.js, React.js, Node.js, TypeScript, bancos de dados NoSQL e SQL.
                                    </li>
                                    <li className="text-[16px] md:text-[18px] text-center sm:text-start leading-7">
                                          <span className="font-medium"> &raquo; Atendimento Exclusivo:</span> Você acompanha todo o processo de desenvolvimento do seu projeto através de uma conta personalizada, garantindo transparência e comunicação constante.
                                    </li>
                                    <li className="text-[16px] md:text-[18px] text-center sm:text-start leading-7">
                                          <span className="font-medium"> &raquo; Qualidade e Detalhamento:</span> Compromisso inabalável com a qualidade, desde o design inicial até o desenvolvimento final e hospedagem. Cada detalhe é cuidadosamente executado.
                                    </li>
                                    <li className="text-[16px] md:text-[18px] text-center sm:text-start leading-7">
                                          <span className="font-medium"> &raquo; Profissional de Confiança:</span> Trabalhar comigo significa ter um profissional dedicado que se preocupa com o seu sucesso online, oferecendo suporte contínuo e soluções personalizadas.
                                    </li>
                              </ul>

                        </Flex>
                        <div className="w-full flex justify-center">
                              <img src="/hero-img.png" className="mt-[40px] w-[300px] lg:w-[400px] transition-all duration-300" />
                        </div>
                  </Flex>
                  <AnimBottomToTop delay={0.5}>
                        <div className='w-full flex items-center justify-center mt-[40px]'>
                              <Button size="lg" className="w-auto sm:w-[200px] uppercase">
                                    <p className='mt-1'>
                                          Entre em contato
                                    </p>
                              </Button>
                        </div>
                  </AnimBottomToTop >
            </section>
      );
};