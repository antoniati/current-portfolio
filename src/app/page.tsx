"use client";

import { useState } from "react";

import {
  AsideMenu,
  FAQSection,
  Footer,
  MainHeader,
  HeroSection,
  PlanSection,
  ProjectSection,
  ServicesSection,
} from "@/components";
import { Button } from "@tremor/react";
import { BsWhatsapp } from "react-icons/bs";

export default function Home() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  return (
    <main>
      <AsideMenu isAsideVisible={isAsideVisible} setIsAsideVisible={setIsAsideVisible} />
      <MainHeader isAsideVisible={isAsideVisible} setIsAsideVisible={setIsAsideVisible} />
      <HeroSection />
      <ServicesSection />
      <ProjectSection />
      <PlanSection />
      <FAQSection />
      <Footer />
    </main>
  );
};