import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";

interface DropdownMenuProps {
      label: string;
      items: {
            href: string,
            label: string
      }[];
};

export const DropdownMenu = ({ label, items }: DropdownMenuProps) => (
      <Menu>
            <MenuButton className="mt-1 hover:text-blue-700 font-medium transition-all duration-300">
                  <div className="flex items-center space-x-2">
                        <span>{label}</span>
                        <BsChevronDown size={14} />
                  </div>
            </MenuButton>
            <Transition
                  enter="transition ease-out duration-75"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
            >
                  <MenuItems
                        className="w-[280px] space-y-4 fixed top-[50px] origin-top-right rounded-xl border border-slate-300 z-30 bg-white p-4 text-slate-800 mt-4"
                  >
                        {items.map((item) => (
                              <MenuItem key={item.href}>
                                    <Link href={item.href} className="group flex w-full hover:bg-blue-50 items-center gap-2 hover:rounded-tremor-small py-2 hover:text-blue-700 px-3 transition-all duration-300 border-b">
                                          {item.label}
                                    </Link>
                              </MenuItem>
                        ))}
                  </MenuItems>
            </Transition>
      </Menu>
);
