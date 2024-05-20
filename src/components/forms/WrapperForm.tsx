import { Card, Flex, Subtitle, Text, } from "@tremor/react";
import { Doubts } from "@/components";
import { AnimBottomToTop } from "../animations/AnimBottomToTop";

interface WrapperFormProps {
      titleForm: string;
      descriptionForm: string;
      children: React.ReactNode;
};

export const WrapperForm = ({ titleForm, descriptionForm, children }: WrapperFormProps) => {
      return (
            <AnimBottomToTop>
                  <Flex className="w-full flex-col px-4 py-[100px]">
                        <Card className="text-center max-w-lg h-[500px] flex flex-col items-center justify-center space-y-4 mt-[40px]">
                              <Subtitle className='font-bold text-slate-900' style={{ textTransform: 'uppercase' }}>
                                    {titleForm}
                              </Subtitle>
                              <Text> {descriptionForm} </Text>
                              {children}
                        </Card>
                  </Flex>
            </AnimBottomToTop>
      );
};