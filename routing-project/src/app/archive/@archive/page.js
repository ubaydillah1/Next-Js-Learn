import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

const ArchivePage = () => {
  const links = getAvailableNewsYears();

  return (
    <header>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default ArchivePage;
