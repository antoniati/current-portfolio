import { Button, Divider, Flex, Grid } from "@tremor/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
      return (
            <footer className="w-full">
                  <Divider />
                  <div>
                        <Grid numItems={2} numItemsSm={3} className="w-full px-4 md:px-[100px] gap-[40px]">
                              <div>
                                    <h4 className="text-tremor-title font-medium">Links Rápidos</h4>
                                    <ul className="space-y-2 mt-4">
                                          <li><Button variant="light" size="lg">Portifolio</Button></li>
                                          <li><Button variant="light" size="lg">Serviços</Button></li>
                                          <li><Button variant="light" size="lg">Sobre</Button></li>
                                    </ul>
                              </div>
                              <div>
                                    <h4 className="text-tremor-title font-medium">Suporte</h4>
                                    <ul className="space-y-2 mt-4">
                                          <li><Button variant="light" size="lg">FAQ</Button></li>
                                          <li><Button variant="light" size="lg">Planos</Button></li>
                                          <li><Button variant="light" size="lg">Opções de pagamento</Button></li>
                                    </ul>
                              </div>
                              <div>
                                    <h4 className="text-tremor-title font-medium">
                                          Links Sociais
                                    </h4>
                                    <ul className="flex mt-2 space-x-4">
                                          <li>
                                                <Button icon={BsLinkedin} variant="secondary" />
                                          </li>
                                          <li>
                                                <Button icon={BsGithub} variant="secondary" />
                                          </li>
                                    </ul>
                              </div>
                        </Grid>
                  </div>
                  <Divider />
                  <Flex className="px-[40px] sm:text-start text-center flex-col sm:flex-row gap-[20px] pb-[20px]">
                        <h4 className="text-tremor-label">&#169; 2024 - Antoniati, Todos os Direitos Reservados. | Desenvolvido no Brasil</h4>
                        <h4 className="text-tremor-label font-medium">
                              Criado por: Antoniati
                        </h4>
                  </Flex>
            </footer>
      )
}