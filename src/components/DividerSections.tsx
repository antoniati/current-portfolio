import { Divider, Flex } from "@tremor/react"

import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400"]
});

export const DividerSections = ({ text }: { text: string }) => {
  return (
    <Flex className="justify-center py-[40px] px-4 lg:px-[100px]">
      <Divider className="w-[40px]  md:w-[250px] lg:w-full"  color="#CBD5E1"/>
      <div className="w-full text-center">
        <h2 className={workSans.className}>
          <span className="text-[14px] sm:text-[16px]"> {text} </span>
        </h2>
      </div>
      <Divider className="w-[40px] md:w-[250px] lg:w-full"  color="#CBD5E1"/>
    </Flex>
  )
}