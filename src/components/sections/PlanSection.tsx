import { BsChevronDoubleRight } from "react-icons/bs";
import { Button, Card, Flex, Metric } from "@tremor/react";
import { SessionHeader } from "@/components";

const planServicesData = [
      {
            title: "Basic",
            price: "R$ 289,90",
            services: [
                  "01 Landing Page",
                  "08 Inner Pages",
                  "03 Meses de Suporte",
                  "04 Revisões",
            ],
      },
      {
            title: "Standard",
            price: "R$ 300,00",
            services: [
                  "03 Landing Page",
                  "16 Inner Pages",
                  "07 Meses de Suporte",
                  "Revisões Ilimitadas",
            ],
      },
]

export const PlanSection = () => {
      return (
            <section className="main-container">
                  <SessionHeader
                        textDivider="Planos Mensais Basic e Standard."
                        title=""
                  />

                  <Flex className="items-center md:items-start gap-[40px] flex-col xl:flex-row">
                        <Flex className="flex-col items-start justify-start space-y-4">
                              <Metric className="w-full text-dark-tremor-brand text-center lg:text-start">
                                    Planos de Serviços
                              </Metric>
                              <p className="text-center lg:text-start text-[16px]">
                                    Descubra os planos de serviços personalizáveis que impulsionarão a presença online do seu negócio.
                              </p>
                              <p className="text-center lg:text-start text-[16px]">
                                    Escolha entre as opções de <b>Basic</b> ou <b>Standard</b>, projetadas para atender às suas necessidades específicas com um excelente custo-benefício.
                              </p>
                        </Flex>

                        <Flex className="w-full flex-col items-center lg:flex-row lg:items-start justify-start gap-[20px]">
                              {planServicesData.map((plan, index) => {
                                    return (
                                          <Card key={index} className="space-y-6 max-w-full md:max-w-sm" >
                                                <h2 className="w-full text-center text-[40px] font-medium">
                                                      {plan.title}
                                                </h2>
                                                <p className="w-full text-center text-[48px]">
                                                      {plan.price}
                                                      <span className="text-tremor-title">
                                                            / mensal
                                                      </span>
                                                </p>

                                                <ul className="flex flex-col space-y-4 items-start">
                                                      {plan.services.map((service, index) => (
                                                            <li key={index} className="flex space-x-2 items-center">
                                                                  <BsChevronDoubleRight />
                                                                  <p className="text-tremor-title">
                                                                        {service}
                                                                  </p>
                                                            </li>
                                                      ))}
                                                </ul>

                                                <div className="w-full flex items-center justify-center">
                                                      <Button size="lg" className="w-[300px] rounded-tremor-small">
                                                            <p className="text-[16px] uppercase">
                                                                  Selecionar Plano
                                                            </p>
                                                      </Button>
                                                </div>
                                          </Card>
                                    )
                              })}
                        </Flex>
                  </Flex>
            </section >
      )
}