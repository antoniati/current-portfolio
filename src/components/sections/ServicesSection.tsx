"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, Flex, } from "@tremor/react";
import { SessionHeader } from "@/components";

import { servicesData } from "@/utils/services-data";

export const ServicesSection = () => {

      // Configurações do Slider
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
            <section className="main-container">
                  <SessionHeader
                        textDivider="Trabalho de forma transparente e colaborativa."
                        title="Meus Serviços"
                  />

                  <div className="relative overflow-hidden pb-[20px]">
                        <Slider {...settings}>
                              {servicesData.map((service, index) => {
                                    const Icon = service.icon;

                                    return (
                                          <div key={index} className="p-4">
                                                <Card>
                                                      <Flex className="flex-col items-start space-y-6">
                                                            <div className="p-[20px]">
                                                                  <Icon size={40} />
                                                            </div>
                                                            <h3 className="w-full text-center text-tremor-metric font-semibold">
                                                                  {service.title}
                                                            </h3>
                                                            <p className="text-center text-tremor-title mb-4">
                                                                  {service.description}
                                                            </p>
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