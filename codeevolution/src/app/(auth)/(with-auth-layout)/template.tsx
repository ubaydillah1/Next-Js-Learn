"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [input, setInput] = useState("");
  const pathname = usePathname();

  return (
    <div className="text-center">
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className="text-black"
          value={input}
        />
      </div>
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
