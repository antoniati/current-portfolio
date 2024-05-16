import { Divider, Flex, Metric, Text } from '@tremor/react'

import { Work_Sans } from "next/font/google";

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
                  <Metric className="w-full text-center text-dark-tremor-brand mt-[30px]">
                        {title}
                  </Metric>
            </Flex>
      );
};