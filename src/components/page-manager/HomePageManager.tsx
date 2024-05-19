"use client";

import { useState } from "react";

import {
      AsideMenu,
      FAQSection,
      Footer,
      Navbar,
      HeroSection,
      RecentPortifolioSection,
      ServicesSection,
} from "@/components";

export const HomePageManager = () => {
      const [isAsideVisible, setIsAsideVisible] = useState(false);

      return (
            <main>
                  <AsideMenu isAsideVisible={isAsideVisible} setIsAsideVisible={setIsAsideVisible} />
                  <Navbar isAsideVisible={isAsideVisible} setIsAsideVisible={setIsAsideVisible} />
                  <HeroSection />
                  <ServicesSection />
                  <RecentPortifolioSection />
                  <FAQSection />
                  <Footer />
            </main>
      );
};