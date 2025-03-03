"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "login",
    href: "/login",
  },
  {
    name: "register",
    href: "/register",
  },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="text-center">
      <h2 className="text-center text-[20px]">Inner Layout</h2>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              isActive ? "font-bold" : "text-red-300"
            } m-10 inline-block`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
