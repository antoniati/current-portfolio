"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Flex, } from "@tremor/react";
import { AnimBottomToTop, SessionHeader } from "@/components";
import { servicesData } from "@/utils/services-data";

export const ServicesSection = () => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000,
            pauseOnHover: true,
            cssEase: "linear",
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
                        title="Conheça Meus Serviços"
                  />

                  <AnimBottomToTop delay={0.5}>
                        <div className="relative overflow-hidden pb-[20px]">
                              <Slider {...settings}>
                                    {servicesData.map((service, index) => {
                                          const Icon = service.icon;
                                          return (
                                                <Link href={`${service.url}`} key={index} className="p-2 pb-4">
                                                      <Card className="p-4 h-[300px] hover:shadow-md hover:bg-blue-50 transition-all duration-300">
                                                            <Flex className="flex-col items-start space-y-6">
                                                                  <div className="p-[20px]">
                                                                        <Icon size={36} />
                                                                  </div>
                                                                  <h3 className="w-full text-center text-[20px] md:text-[24px] font-medium mt-4">
                                                                        {service.title}
                                                                  </h3>
                                                                  <p className="w-full text-center text-[16px] sm:text-[18px] mb-4">
                                                                        {service.description}
                                                                  </p>
                                                            </Flex>
                                                      </Card>
                                                </Link>
                                          );
                                    })}
                              </Slider>
                        </div>
                  </AnimBottomToTop>
            </section>
      );
};