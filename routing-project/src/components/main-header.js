import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <ul className="flex justify-between text-2xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </header>
  );
}
