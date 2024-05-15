"use client";

import { useEffect, useState } from "react";
import { BsCheck2All } from "react-icons/bs";
import { Button, Flex } from "@tremor/react";

const words = ["Websites", "Ecommerces", "SAAS", "Marketplaces"];

export const HeroSection = () => {
      const [currentWordIndex, setCurrentWordIndex] = useState(0);
      const [currentWord, setCurrentWord] = useState("");
      const [index, setIndex] = useState(0);

      useEffect(() => {
            const intervalId = setInterval(() => {
                  const newWordIndex =
                        currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1;
                  setCurrentWordIndex(newWordIndex);
                  setCurrentWord("");
                  setIndex(0);
            }, 3000);

            return () => clearInterval(intervalId);
      }, [currentWordIndex]);

      useEffect(() => {
            const timeoutId = setTimeout(() => {
                  if (index < words[currentWordIndex].length) {
                        setCurrentWord((prevWord) => prevWord + words[currentWordIndex][index]);
                        setIndex((prevIndex) => prevIndex + 1);
                  }
            }, 200);

            return () => clearTimeout(timeoutId);
      }, [index, currentWordIndex]);

      return (
            <section className="w-full pt-[100px]">
                  <Flex className="w-full sm:flex-row flex-col transition-all duration-300">

                        <div className="w-full flex items-center justify-center p-4">
                              <img
                                    alt="Imagem do programador freelancer Felipe Antoniati"
                                    src={"/hero-img.png"}
                                    className="w-[250px] lg:w-[350px] xl:w-auto transition-all duration-300"
                              />
                        </div>

                        <Flex className="flex-col items-center sm:items-start text-center sm:text-start  transition-all duration-300">
                              <h1 className="text-[24px] lg:text-[38px] xl:text-[48px] font-medium text-dark-tremor-brand transition-all duration-300">
                                    Programador Freelancer
                              </h1>
                              <h2 className="text-[20px] lg:text-[30px] xl:text-[40px]  transition-all duration-300">
                                    Especialista no desenvolvimento de <br />
                                    <div className="h-[30px] xl:h-[40px] text-[24px] lg:text-[36px] xl:text-[40px] transition-all duration-300">
                                          {currentWord}
                                    </div>
                              </h2>

                              <div className="flex py-[30px] xl:py-[40px] transition-all duration-300">
                                    <p className="flex space-x-1 text-[14px] md:text-[16px] transition-all duration-300">
                                          <BsCheck2All size={20} color="#00BC91" />
                                          <span> Disponível para projetos </span>
                                    </p>
                              </div>

                              <Button size="lg" className="w-[300px] rounded-tremor-small">
                                    <p className="text-[16px] uppercase text-slate-50 mt-1">
                                          Contrate um Plano de Serviço
                                    </p>
                              </Button>
                        </Flex>
                  </Flex>
            </section>
      );
};