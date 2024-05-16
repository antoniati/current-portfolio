"use client";

import { Divider, Flex, Tab, TabGroup, TabList, TabPanel, TabPanels, Title, } from "@tremor/react";
import { BeatLoading, FAQSection, PlanSection, AnimBottomToTop, PageHeader, PortifolioGrid } from "@/components";
import { useProductData } from "@/hooks/use-product-data";
import { projectsData } from "@/utils/projects-data-test";

export const PortifolioPageManager = () => {
      const { products } = useProductData();

      const filteredWebsitesProjects = projectsData.filter(project => project.title === "Website");
      const filteredEcommercesProjects = projectsData.filter(project => project.title === "Ecommerce");
      const filteredSAASProjects = projectsData.filter(project => project.title === "SAAS");
      const filteredMarkteplaceProjects = projectsData.filter(project => project.title === "Markteplace");

      return (
            <section>
                  <PageHeader
                        title="Portifolio"
                        description={" Cada projeto é criado, utilizando as tecnologias mais avançadas e seguindo as melhores práticas de desenvolvimento web. Com minha experiência e habilidades, podemos impulsionar sua presença online, aumentar sua visibilidade nos mecanismos de busca e alcançar seus objetivos comerciais. "}
                  />

                  <Divider />

                  {products.length > 0 ? (
                        <>
                              <TabGroup className="w-full px-4 lg:px-[100px] pb-[40px]">
                                    <div className=" overflow-auto sm:pb-0">
                                          <TabList className="mt-4" variant="solid">
                                                <Tab> <Title>Todos </Title> </Tab>
                                                <Tab> <Title>Websites </Title> </Tab>
                                                <Tab> <Title>Ecommerces </Title> </Tab>
                                                <Tab> <Title>SAAS </Title> </Tab>
                                                <Tab> <Title>MarktePlaces </Title> </Tab>
                                          </TabList>
                                    </div>

                                    <Divider />

                                    <AnimBottomToTop>
                                          <TabPanels className="max-h-[500px] overflow-auto">
                                                <TabPanel className="p-2">
                                                      <PortifolioGrid projects={projectsData} />
                                                </TabPanel>
                                                <TabPanel className="p-2">
                                                      <PortifolioGrid projects={filteredWebsitesProjects} />
                                                </TabPanel>
                                                <TabPanel className="p-2">
                                                      <PortifolioGrid projects={filteredEcommercesProjects} />
                                                </TabPanel>
                                                <TabPanel className="p-2">
                                                      <PortifolioGrid projects={filteredSAASProjects} />
                                                </TabPanel>
                                                <TabPanel className="p-2">
                                                      <PortifolioGrid projects={filteredMarkteplaceProjects} />
                                                </TabPanel>
                                          </TabPanels>
                                    </AnimBottomToTop>
                              </TabGroup>

                              <PlanSection />
                              <FAQSection />
                        </>
                  ) : (
                        <Flex className="w-full h-[400px] flex-col items-center justify-center">
                              <BeatLoading />
                        </Flex>
                  )}
            </section>
      )
}