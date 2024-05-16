"use client";

import { useState } from "react";

import {
      AsideMenu,
      FAQSection,
      Footer,
      MainHeader,
      HeroSection,
      PlanSection,
      RecentPortifolioSection,
      ServicesSection,
} from "@/components";

export const HomePageManager = () => {
      const [isAsideVisible, setIsAsideVisible] = useState(false);

      return (
            <main>
                  <AsideMenu isAsideVisible={isAsideVisible} setIsAsideVisible={setIsAsideVisible} />
                  <MainHeader isAsideVisible={isAsideVisible} setIsAsideVisible={setIsAsideVisible} />
                  <HeroSection />
                  <ServicesSection />
                  <RecentPortifolioSection />
                  <PlanSection />
                  <FAQSection />
                  <Footer />
            </main>
      )
}