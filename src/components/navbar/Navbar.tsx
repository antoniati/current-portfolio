"use client";

import Link from "next/link";
import Image from "next/image";
import { BsList } from "react-icons/bs";
import { Button, Divider, Flex, Subtitle } from "@tremor/react";
import { LoginButton } from "../buttons/LoginButton";
import { NavItem } from "./NavItem";
import { DropdownMenu } from "./DropdownMenu";

interface NavbarProps {
      isAsideVisible: boolean;
      setIsAsideVisible: (isAsideVisible: boolean) => void;
};

export const Navbar = ({ isAsideVisible, setIsAsideVisible }: NavbarProps) => {
      const services = [
            { href: "/services/websites", label: "Websites" },
            { href: "/services/websites/ecommerces", label: "Ecommerces" },
            { href: "/services/saas", label: "SAAS" },
            { href: "/services/marketplaces", label: "Marketplaces" },
            { href: "/services/seo", label: "SEO e Marketing" },
            { href: "/services/support", label: "Revisões e Suporte" },
      ];

      return (
            <header className="fixed bg-white z-20 w-full">
                  <Flex className="px-4 lg:px-[100px] py-4">
                        <Link href="/">
                              <Flex className="w-1/2 justify-start space-x-2">
                                    <img alt="Logotipo iDevStore" src="/logo.svg" className="w-[26px]" />
                                    <Subtitle className="uppercase font-bold mt-1">Antoniati</Subtitle>
                              </Flex>
                        </Link>

                        <nav className="w-1/2 hidden md:flex items-center justify-end space-x-4">
                              <ul className="flex items-center space-x-6">
                                    <NavItem href="/">Home</NavItem>
                                    <NavItem href="/about">Sobre</NavItem>
                                    <NavItem href="/portfolio">Portifólio</NavItem>
                                    <DropdownMenu label="Serviços" items={services} />
                                    <NavItem href="/contact">contato</NavItem>
                                    <NavItem href="/faq">FAQ</NavItem>
                              </ul>
                              <LoginButton pageUrl="/auth/login">
                                    <Button variant="secondary" className="ml-4">
                                          <div className="mt-1">Conta Personalizada</div>
                                    </Button>
                              </LoginButton>
                        </nav>

                        <button
                              type="button"
                              onClick={() => setIsAsideVisible(!isAsideVisible)}
                              className="flex md:hidden cursor-pointer"
                        >
                              <BsList size={26} />
                        </button>
                  </Flex>

                  <Divider className="m-0" />
            </header>
      );
};