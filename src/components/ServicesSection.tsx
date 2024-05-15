"use client";

import { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Flex, Metric } from "@tremor/react";
import { DividerSections } from "@/components";
import { servicesData } from "@/utils/services-data";

export const ServicesSection = () => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: true,
            responsive: [
                  {
                        breakpoint: 768,
                        settings: {
                              slidesToShow: 1,
                        },
                  },
                  {
                        breakpoint: 992,
                        settings: {
                              slidesToShow: 2,
                        },
                  },
            ],
      };

      return (
            <section>
                  <DividerSections text="Trabalho de forma transparente e colaborativa." />
                        <Metric className="w-full text-center text-dark-tremor-brand">
                              Meus Serviços
                        </Metric>
                  <div className="relative px-0 sm:px-[100px] py-[40px] overflow-hidden">
                        <Slider {...settings}>
                              {servicesData.map((service, index) => {
                                    const Icon = service.icon;

                                    return (
                                          <div key={index} className="p-4">
                                                <Card className="">
                                                      <Flex className="flex-col items-start space-y-6">
                                                            <div className="p-[20px]">
                                                                  <Icon size={40} />
                                                            </div>
                                                            <h3 className="w-full text-center text-tremor-metric font-semibold">{service.title}</h3>
                                                            <p className="text-center text-tremor-title mb-4">{service.description}</p>
                                                      </Flex>
                                                </Card>
                                          </div>
                                    );
                              })}
                        </Slider>
                  </div>
            </section>
      )
}