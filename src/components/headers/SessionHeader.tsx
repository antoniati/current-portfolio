import { Divider, Flex, Metric, Text } from '@tremor/react'

import { Work_Sans } from "next/font/google";
import { AnimBottomToTop } from '../animations/AnimBottomToTop';

const workSans = Work_Sans({
      subsets: ["latin"],
      weight: ["300", "400"]
});

interface SessionHeaderProps {
      textDivider: string;
      title: string;
};

export const SessionHeader = ({ textDivider, title }: SessionHeaderProps) => {
      return (
            <AnimBottomToTop delay={0.5}>
                  <Flex className='flex-col'>
                        <Flex className="justify-center">
                              <Divider className="w-[40px] md:w-[250px] lg:w-full" />
                              <div className="w-full text-center">
                                    <Text className={workSans.className}>
                                          <span className="text-[14px] sm:text-[16px]">
                                                {textDivider}
                                          </span>
                                    </Text>
                              </div>
                              <Divider className="w-[40px] md:w-[250px] lg:w-full" />
                        </Flex>
                        {title && (
                              <h2 className="text-[20px] md:text-[24px] font-semibold mt-4">
                                    {title}
                              </h2>
                        )}
                  </Flex>
            </AnimBottomToTop >
      );
};