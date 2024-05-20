"use client";

import { useRouter } from "next/navigation";
import { Button } from "@tremor/react";
import { AnimBottomToTop, PortifolioGrid, SessionHeader } from "@/components";
import { projectsData } from "@/utils/projects-data-test";

export const RecentPortifolioSection = () => {
      const router = useRouter();

      return (
            <section className="main-container">
                  <SessionHeader
                        textDivider="Explore minhas jornadas digitais mais recentes."
                        title=" Portifólio Recente"
                  />

                  <AnimBottomToTop delay={0.5}>
                        <PortifolioGrid projects={projectsData} />
                  </AnimBottomToTop>

                  <AnimBottomToTop delay={0.6}>
                        <div className="w-full flex items-center justify-center mt-[40px]">
                              <Button
                                    className="w-auto sm:w-[200px]"
                                    onClick={() => router.push("/portfolio")}
                              >
                                    <p className=" mt-1 uppercase">
                                          Veja Todos Projetos
                                    </p>
                              </Button>
                        </div>
                  </AnimBottomToTop>
            </section>
      );
};