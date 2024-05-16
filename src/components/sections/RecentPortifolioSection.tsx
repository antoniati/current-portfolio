"use client";

import { useRouter } from "next/navigation";
import { Button } from "@tremor/react";
import { PortifolioGrid, SessionHeader } from "@/components";
import { projectsData } from "@/utils/projects-data-test";

export const RecentPortifolioSection = () => {
      const router = useRouter();

      return (
            <section className="main-container">
                  <SessionHeader
                        textDivider="Explore minhas jornadas digitais mais recentes."
                        title=" Portifólio Recente"
                  />

                  <PortifolioGrid projects={projectsData} />

                  <div className="w-full flex items-center justify-center">
                        <Button
                              size="lg"
                              className="w-[300px] rounded-tremor-small"
                              variant="secondary"
                              onClick={() => router.push("/portfolio")}
                        >
                              <p className="text-[16px] uppercase mt-1">
                                    Veja todos projetos
                              </p>
                        </Button>
                  </div>
            </section>
      );
};