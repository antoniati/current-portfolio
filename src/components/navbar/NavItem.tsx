import Link from 'next/link';
import { ReactNode } from 'react'

interface NavItemProps {
      href: string;
      children: ReactNode
};

export const NavItem = ({ href, children }: NavItemProps) => (
      <Link href={href} className="mt-1 hover:text-blue-700 font-medium transition-all duration-300">
            <li>{children}</li>
      </Link>
);