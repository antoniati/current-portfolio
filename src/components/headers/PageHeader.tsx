import { Flex, Text, Title } from "@tremor/react";
import { AnimBottomToTop } from "@/components";

interface PageHeaderProps {
      title: string;
      description: string;
};

export const PageHeader = ({ title, description }: PageHeaderProps) => {
      return (
            <AnimBottomToTop>
                  <Flex className="flex-col items-start justify-start space-y-4 px-4 lg:px-[100px] pt-[100px] ">
                        <Title className=" w-full text-center sm:text-start text-tremor-metric font-bold">
                              {title}
                        </Title>
                        <Text className="text-[16px] sm:text-tremor-title text-slate-700 text-center sm:text-start ">
                              {description}
                        </Text>
                  </Flex>
            </AnimBottomToTop>
      );
};