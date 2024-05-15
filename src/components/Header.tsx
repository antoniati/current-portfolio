"use client";

import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsList } from "react-icons/bs";
import { Divider, Flex, Subtitle } from "@tremor/react";
import { navItemData } from "@/utils/nav-item-data";

interface HeaderProps {
      isAsideVisible: boolean;
      setIsAsideVisible: (isAsideVisible: boolean) => void;
};

export const MainHeader = ({
      isAsideVisible,
      setIsAsideVisible,
}: HeaderProps) => {
      const styleNavItem = "mt-1 hover:text-blue-700 hover:text-blue-700 font-medium transition-all duration-300";

      return (
            <header className="fixed bg-white z-20 w-full">
                  <Flex className="px-4 md:px-[100px] py-4">
                        <Link href={"/"}>
                              <Flex className="w-1/2 justify-start space-x-2">
                                    <Image
                                          alt="Logotipo iDevStore"
                                          src={"/logo.svg"}
                                          width={26}
                                          height={26}
                                    />
                                    <Subtitle className="uppercase font-bold mt-1">
                                          Antoniati
                                    </Subtitle>
                              </Flex>
                        </Link>

                        <nav className="hidden sm:flex items-center space-x-4">
                              <ul className="flex items-center space-x-6">
                                    {navItemData.map((item, index) => {
                                          return (
                                                <Link
                                                      key={index}
                                                      href={item.url}
                                                      className={`${styleNavItem}`}
                                                >
                                                      <li> {item.text} </li>
                                                </Link>
                                          );
                                    })}

                                    <Flex className="justify-start space-x-4">
                                          <Link
                                                href={"https://www.linkedin.com/in/felipeantoniati/"}
                                                className={`${styleNavItem}`}
                                          >
                                                <BsLinkedin size={26} />
                                          </Link>
                                          <Link
                                                href={"https://github.com/antoniati"}
                                                className={`${styleNavItem}`}
                                          >
                                                <BsGithub size={26} />
                                          </Link>
                                    </Flex>
                              </ul>
                        </nav>

                        <button
                              type="button"
                              onClick={() => setIsAsideVisible(!isAsideVisible)}
                              className={"flex sm:hidden cursor-pointer"}
                        >
                              <BsList size={26} />
                        </button>
                  </Flex>

                  <Divider className="m-0" />
            </header>
      );
};