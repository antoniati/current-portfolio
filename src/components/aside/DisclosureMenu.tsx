import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { AsideMenuItem } from "./AsideMenuItem";

interface DisclosureMenuProps {
  setIsAsideVisible: (isAsideVisible: boolean) => void;
}

export const DisclosureMenu = ({ setIsAsideVisible }: DisclosureMenuProps) => (
  <Disclosure as="div" defaultOpen={false} className="group">
    <DisclosureButton className="group flex focus:outline-none items-center justify-between w-full text-start mt-4 hover:bg-blue-50 hover:text-blue-700 p-2 transition-all duration-300 hover:rounded-tremor-small border-b">
      <span className="w-full text-[24px]">
        Serviços
      </span>
      <BsChevronDown className="size-5 fill-slate-500 group-hover:fill-blue-700 group-open:rotate-180" />
    </DisclosureButton>
    <DisclosurePanel>
      {[
        { href: "/services/websites", label: "Websites" },
        { href: "/services/ecommerces", label: "Ecommerces" },
        { href: "/services/saas", label: "SAAS" },
        { href: "/services/marketplaces", label: "Marketplaces" },
        { href: "/services/support", label: "Revisão e Suporte" },
      ].map((item) => (
        <AsideMenuItem key={item.href} href={item.href} onClick={() => setIsAsideVisible(false)}>
          {item.label}
        </AsideMenuItem>
      ))}
    </DisclosurePanel>
  </Disclosure>
);