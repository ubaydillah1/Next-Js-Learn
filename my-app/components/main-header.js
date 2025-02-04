"use client";

import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const path = usePathname();

  return (
    <header className="flex gap-20 items-center justify-between">
      <Link href="/">
        <Image
          src={logoImg}
          alt="header-image"
          priority
          className="w-32 aspect-square"
        />
        NextLevel Food
      </Link>

      <nav>
        <ul className="flex gap-10 text-[30px]">
          <li className="transition duration-300 ease-in-out hover:text-shadow">
            <Link
              href="/meals"
              // className={`${path.startsWith("/meals") && "text-shadow"}`}
            >
              Browse Meals
            </Link>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-shadow">
            <Link
              href="/community"
              // className={`${path.startsWith("/community") && "text-shadow"}`}
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
