"use client";

import { useEffect, useState } from "react";
import { BsCheck2All, BsRocketTakeoff } from "react-icons/bs";
import { Button, Flex } from "@tremor/react";
import { AnimBottomToTop } from "../animations/AnimBottomToTop";
import Image from "next/image";

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
            <section>
                  <div className="w-full flex flex-col-reverse sm:flex-row pt-[60px] sm:pt-[100px] md:pb-[0px] pb-[40px] text-center sm:text-start transition-all duration-300">
                        <AnimBottomToTop delay={0.4}>
                              <div className="w-full flex justify-center transition-all duration-300 mt-[40px] sm:mt-[0px]">
                                    <img
                                          alt="Imagem do programador freelancer Felipe Antoniati"
                                          src={"/hero-img.png"}
                                          className="w-[300px] lg:w-[400px] transition-all duration-300"
                                    />
                              </div>
                        </AnimBottomToTop>

                        <AnimBottomToTop delay={0.5}>
                              <div className="w-full flex flex-col h-full">
                                    <div className="w-full flex sm:items-start items-center flex-col mt-[20px] transition-all duration-300">
                                          <h1 className="text-[26px] md:text-[30px] lg:text-[40px] font-semibold transition-all duration-300">
                                                Programador Freelancer
                                          </h1>
                                          <h2 className="text-[18px] md:text-[24px] lg:text-[30px] max-w-[500px] transition-all duration-300">
                                                Especialista no desenvolvimento de <br />
                                                <div className="h-[40px] text-[22px] lg:text-[30px] font-semibold">{currentWord}</div>
                                          </h2>
                                    </div>
                                    <p className="w-full flex justify-center sm:justify-start items-center space-x-2 text-[14px] sm:text-[16px] mt-2 md:mt-6">
                                          <BsCheck2All color="#00BC91" />
                                          <span>Disponível para projetos</span>
                                    </p>
                                    <Flex className="w-full flex-col sm:flex-row sm:justify-start justify-center gap-[20px] sm:gap-[10px] mt-6 transition-all duration-300">
                                          <Button  className="w-[300px] sm:w-auto transition-all duration-300">
                                                <p className="mt-1 uppercase">
                                                      Entre em contato
                                                </p>
                                          </Button>
                                          <Button className="w-[300px] sm:w-auto transition-all duration-300" variant="secondary">
                                                <p className="mt-1 uppercase">
                                                      Saiba Mais
                                                </p>
                                          </Button>
                                    </Flex>
                              </div>
                        </AnimBottomToTop>
                  </div>
            </section>
      );
};