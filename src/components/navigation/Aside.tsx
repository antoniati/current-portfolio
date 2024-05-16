"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsX } from "react-icons/bs";
import { Button, Divider, Flex, Subtitle, Title } from "@tremor/react";
import { navItemData } from "@/utils/nav-item-data";

interface AsideProps {
      isAsideVisible: boolean
      setIsAsideVisible: (isAsideVisible: boolean) => void;
};

export const AsideMenu = ({ isAsideVisible, setIsAsideVisible }: AsideProps) => {
      return (
            <aside className={isAsideVisible ? "bg-white fixed w-full h-full top-0 left-0 transition-all duration-300 z-30" : "-left-[400px]"} >
                  {isAsideVisible && (
                        <>
                              <Flex className="w-full p-4">
                                    <section>
                                          <Link href={"/"}>
                                                <Flex className="w-1/2 justify-start space-x-4">
                                                      <Image
                                                            alt="Logotipo Antoniati"
                                                            src={"/logo.svg"}
                                                            width={26}
                                                            height={26}
                                                      />
                                                      <h2 className="uppercase mt-1 font-bold">
                                                            Antoniati
                                                      </h2>
                                                </Flex>
                                          </Link>
                                    </section>
                                    <Button
                                          size="lg"
                                          className="hover:bg-blue-50 rounded-tremor-small p-2 text-blue-700 transition-all duration-300"
                                          variant="light"
                                          onClick={() => setIsAsideVisible(!isAsideVisible)}
                                    >
                                          <BsX size={26} />
                                    </Button>
                              </Flex>

                              <nav className="w-full flex-col items-center justify-center p-4">
                                    <ul className="h-full flex-col items-center justify-center">
                                          {navItemData.map((item, index) => {
                                                return (
                                                      <Link key={index} href={item.url}>
                                                            <li className="w-full mt-4 hover:bg-blue-50 hover:text-blue-700 p-2 transition-all duration-300 rounded-tremor-small">
                                                                  <span className="w-full text-tremor-metric" >
                                                                        {item.text}
                                                                  </span>
                                                            </li>
                                                      </Link>
                                                );
                                          })}

                                          <li>
                                                <Flex className="justify-end space-x-4 mt-4 px-2">
                                                      <Link
                                                            href={"https://www.linkedin.com/in/felipeantoniati/"}
                                                            className={"mt-1 hover:text-dark-tremor-brand transition-all duration-300"}
                                                      >
                                                            <BsLinkedin size={26} />
                                                      </Link>
                                                      <Link
                                                            href={"https://github.com/antoniati"}
                                                            className={"mt-1 hover:text-dark-tremor-brand transition-all duration-300"}
                                                      >
                                                            <BsGithub size={26} />
                                                      </Link>
                                                </Flex>
                                          </li>
                                    </ul>

                                    <Divider />

                                    <Button size="lg" className="w-full rounded-tremor-small">
                                          <p className="text-[16px] uppercase text-slate-50 mt-1">
                                                Contrate um Plano de Serviço
                                          </p>
                                    </Button>
                              </nav>
                        </>
                  )}
            </aside>
      );
};