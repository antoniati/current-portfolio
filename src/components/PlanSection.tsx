import React from 'react'
import { DividerSections } from './DividerSections'
import { Button, Card, Flex, Metric } from '@tremor/react'
import { BsChevronDoubleRight } from 'react-icons/bs'

type Props = {}

export const PlanSection = (props: Props) => {
      return (
            <section>
                  <DividerSections text='Planos Mensais Basic e Standard.' />
                  <Flex className='items-center md:items-start px-4 md:px-[100px] gap-[40px] pb-[40px] flex-col xl:flex-row'>
                        <Flex className='flex-col items-start justify-start space-y-4'>
                              <Metric className="w-full text-dark-tremor-brand text-center lg:text-start">
                                    Planos de Serviços
                              </Metric>
                              <p className='text-center lg:text-start text-[16px]'>
                                    Descubra os planos de serviços personalizáveis que impulsionarão a presença online do seu negócio.
                              </p>
                              <p className='text-center lg:text-start text-[16px]'>
                                    Escolha entre as opções de <b>Basic</b> ou <b>Standard</b>, projetadas para atender às suas necessidades específicas com um excelente custo-benefício.
                              </p>
                        </Flex>

                        <Flex className='w-full flex-col items-center lg:flex-row lg:items-start justify-start gap-[20px]'>
                              <Card className='space-y-6 max-w-full md:max-w-sm'>
                                    <h3 className="w-full text-center text-[40px] font-medium">
                                          Basic
                                    </h3>
                                    <p className='w-full text-center text-[48px]'>
                                          R$ 289,90
                                          <span className='text-tremor-title'>
                                                / mensal
                                          </span>
                                    </p>
                                    <ul className='flex flex-col space-y-4 items-start pb-[20px]'>
                                          <li className='flex space-x-2 items-center'>
                                                <BsChevronDoubleRight />
                                                <p className='text-tremor-title'>01 Landing Page</p>
                                          </li>
                                          <li className='flex space-x-2 items-center'>
                                                <BsChevronDoubleRight />
                                                <p className='text-tremor-title'>08 Inner Pages</p>
                                          </li>
                                          <li className='flex space-x-2 items-center'>
                                                <BsChevronDoubleRight />
                                                <p className='text-tremor-title'>03 Meses de Suporte</p>
                                          </li>
                                          <li className='flex space-x-2 items-center'>
                                                <BsChevronDoubleRight />
                                                <p className='text-tremor-title'>04 Revisões</p>
                                          </li>
                                    </ul>
                                    <div className='w-full flex items-center justify-center'>
                                          <Button size="lg" className="w-[300px] rounded-tremor-small">
                                                <p className="text-[16px] uppercase">
                                                      Selecionar Plano
                                                </p>
                                          </Button>
                                    </div>
                              </Card>
                              <Card className='space-y-6 max-w-full md:max-w-sm'>
                                    <h3 className="w-full text-center text-[40px] font-medium">
                                          Standard
                                    </h3>
                                    <p className='w-full text-center text-[48px]'>
                                          R$ 300,00
                                          <span className='text-tremor-title'>
                                                / mensal
                                          </span>
                                    </p>
                                    <ul className='flex flex-col space-y-4 items-start pb-[20px]'>
                                          <li className='flex space-x-2 items-center'>
                                                <BsChevronDoubleRight />
                                                <p className='text-tremor-title'>03 Landing Page</p>
                                          </li>
                                          <li className='flex space-x-2 items-center'>
                                                <BsChevronDoubleRight />
                                                <p className='text-tremor-title'>16 Inner Pages</p>
                                          </li>
                                          <li className='flex space-x-2 items-center'>
                                                <BsChevronDoubleRight />
                                                <p className='text-tremor-title'>07 Meses de Suporte</p>
                                          </li>
                                          <li className='flex space-x-2 items-center'>
                                                <BsChevronDoubleRight />
                                                <p className='text-tremor-title'>Revisões ilimitadas</p>
                                          </li>
                                    </ul>
                                    <div className='w-full flex items-center justify-center'>
                                          <Button size="lg" className="w-[300px] rounded-tremor-small">
                                                <p className="text-[16px] uppercase">
                                                      Selecionar Plano
                                                </p>
                                          </Button>
                                    </div>
                              </Card>
                        </Flex>
                  </Flex>
            </section>
      )
}