import { Accordion, AccordionBody, AccordionHeader, Flex, Button, } from '@tremor/react';
import { SessionHeader } from '@/components'
import { faqItems } from '@/utils/faq-item-data';

export const FAQSection = () => {
      return (
            <section className='main-container'>
                  <SessionHeader
                        textDivider="Suporte informado para todas suas dúvidas"
                        title="FAQ"
                  />

                  <Flex className='w-full flex-col gap-[20px]'>
                        {faqItems.map((item, index) => {
                              return (
                                    <Accordion key={index} className='w-full rounded-tremor-default transition-all duration-300' >
                                          <AccordionHeader className="text-[16px] md:text-[18px] font-medium">
                                                {item.question}
                                          </AccordionHeader>
                                          <AccordionBody >
                                                <p className="leading-[30px] text-[16px] md:text-[18px] py-4">
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
      );
};