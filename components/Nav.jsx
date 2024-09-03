"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "SERVICES",
    path: "/services",
  },
  {
    name: "RESUME",
    path: "/resume",
  },
  {
    name: "PROJECTS",
    path: "/projects",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-yellow-500 border-b-2 border-yellow-500"
            }capitalize font-medium hover:text-yellow-400 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
