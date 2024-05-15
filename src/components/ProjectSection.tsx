import { Button, Card, Grid, Metric } from "@tremor/react";
import { DividerSections } from "@/components";
import { projectsData } from "@/utils/projects-data-test";
import Link from "next/link";
import { BsEye } from "react-icons/bs";

// Define o tamanho dos cards com base na posição do array
const getCardSize = (index: number) => {
      if (index === 1 || index === 3 || index === 5) {
            return "h-[200px]";
      } else if (index === 0 || index === 2 || index === 4) {
            return "h-[200px] md:h-[300px]";
      };
};

// Definine a margem do card do meio da fileira de baixo próxima ao card do meio da fileira de cima
const getCardPosition = (index: number) => {
      if (index === 4) {
            return "-mt-[0px] md:-mt-[100px]";
      };
};

export const ProjectSection = () => {
      return (
            <section className="relative">
                  <DividerSections text="Explore minhas jornadas digitais mais recentes." />

                  <Metric className="w-full text-center text-dark-tremor-brand">
                        Portifólio Recente
                  </Metric>

                  <Grid numItems={1} numItemsMd={3} className="gap-8 px-4 sm:px-[50px] lg:px-[100px] py-[40px]">
                        {projectsData.map((project, index) => (
                              <Link href={"/"} key={index} className={`relative rounded-tremor-default ${getCardPosition(index)}`}>
                                    <div className={`relative hover:flex-col rounded-tremor-default overflow-hidden ${getCardSize(index)}`}>
                                          <img src={project.img} className="w-full h-full object-cover rounded-tremor-default border-2" />

                                          <div className="absolute top-0 flex flex-col space-y-4 items-center justify-center w-full h-full p-4 bg-blue-700/90 opacity-0 hover:opacity-100 transition-all duration-500 text-white font-medium shadow-lg shadow-slate-700">
                                                <BsEye size={26} />
                                                <h1 className="text-tremor-metric">{project.title}</h1>
                                                <p className="text-tremor-label">Clique ou toque para ver detalhes deste projeto</p>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </Grid>
                  <div className="w-full flex items-center justify-center py-[20px]">
                        <Link
                              href={"/portfolio"}
                              className="uppercase w-[300px] h-[41px] flex items-center justify-center font-medium border rounded-tremor-default border-slate-900 hover:border-slate-500 hover:text-white transition-all duration-300 bg-slate-800 hover:bg-slate-950 text-white"
                        >
                              Veja todos projetos
                        </Link>
                  </div>
            </section>
      );
};