"use client";

import { useState } from "react";
import { AsideMenu, Footer, Navbar } from "@/components";

export default function PublicLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  return (
    <main>
      <AsideMenu isAsideVisible={isAsideVisible} setIsAsideVisible={setIsAsideVisible} />
      <Navbar isAsideVisible={isAsideVisible} setIsAsideVisible={setIsAsideVisible} />
      {children}
      <Footer />
    </main>
  );
};