import {
      Metric,
      Accordion,
      AccordionBody,
      AccordionHeader,
      Flex,
      Button,
} from '@tremor/react';

import { DividerSections } from '@/components'
import { faqItems } from '@/utils/faq-item-data';

export const FAQSection = () => {
      return (
            <section>
                  <DividerSections text='Suporte informado para todas suas dúvidas' />
                  <Metric className="w-full text-center text-dark-tremor-brand">
                        FAQ
                  </Metric>
                  <Flex className='w-full flex-col gap-[20px] px-4 lg:px-[100px] py-[40px]'>
                        {faqItems.map((item, index) => {
                              return (
                                    <Accordion key={index} className='w-full rounded-tremor-default p-4 transition-all duration-300' >
                                          <AccordionHeader className="text-[16px] md:text-[20px] font-medium">
                                                {item.question}
                                          </AccordionHeader>
                                          <AccordionBody >
                                                <p className="leading-[30px] text-[16px] md:text-[20px] py-4">
                                                      {item.answer}
                                                </p>
                                          </AccordionBody>
                                    </Accordion>
                              )
                        })}
                  </Flex>
                  <div className='w-full flex items-center justify-center '>
                        <Button size="lg" className="w-[300px] rounded-tremor-small">
                              <p className="text-[16px] uppercase">
                                    Contrate um Plano de Serviço
                              </p>
                        </Button>
                  </div>
            </section >
      )
}