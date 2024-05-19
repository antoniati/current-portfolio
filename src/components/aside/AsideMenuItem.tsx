"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface AsideMenuItemProps {
      href: string;
      onClick: () => void;
      children: ReactNode;
};

export const AsideMenuItem = ({ href, onClick, children }: AsideMenuItemProps) => (
      <li className="w-full mt-4 hover:bg-blue-50 hover:text-blue-700 p-2 transition-all duration-300 hover:rounded-tremor-small border-b">
            <Link href={href} onClick={onClick}>
                  <span className="w-full text-[24px]">
                        {children}
                  </span>
            </Link>
      </li>
);