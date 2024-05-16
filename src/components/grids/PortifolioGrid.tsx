import Link from "next/link";
import { BsEye } from "react-icons/bs";
import { Flex, Grid, Subtitle, Text } from "@tremor/react";
import { ProjectsDataProps } from "@/utils/projects-data-test";

type PortifolioGridProps = {
      projects: ProjectsDataProps[];
};

const getCardSize = (index: number) => {
      if (index === 1 || index === 3 || index === 5) {
            return "h-[200px]";
      } else if (index === 0 || index === 2 || index === 4) {
            return "h-[200px] md:h-[300px]";
      };
};

const getCardPosition = (index: number) => {
      if (index === 4) {
            return "-mt-[0px] md:-mt-[100px]";
      };
};

export const PortifolioGrid = ({ projects }: PortifolioGridProps) => {
      return (
            <Grid numItems={1} numItemsMd={3} className="gap-8">
                  {projects.map((project, index) => (
                        <Link href={"/"} key={index} className={`relative rounded-tremor-default ${getCardPosition(index)} `}>
                              <Flex className={`relative hover:flex-col rounded-tremor-default overflow-hidden ${getCardSize(index)}`}>
                                    <img
                                          src={"/image-test/img-1.png"}
                                          className="w-full h-full object-cover rounded-tremor-default border-2"
                                    />
                                    <div className="absolute top-0 flex flex-col space-y-4 items-center justify-center w-full h-full p-4 bg-gradient-to-r from-sky-500/70 to-blue-700/90 opacity-0 hover:opacity-100 transition-all duration-500 text-white font-medium shadow-lg shadow-slate-700">
                                          <BsEye size={26} />

                                          <Subtitle className="text-tremor-metric">
                                                {project.title}
                                          </Subtitle>
                                          <Text className="text-tremor-label">
                                                Clique ou toque para ver detalhes deste projeto
                                          </Text>
                                    </div>
                              </Flex>
                        </Link>
                  ))}
            </Grid>
      );
};