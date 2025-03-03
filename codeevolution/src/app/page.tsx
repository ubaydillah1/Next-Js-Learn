import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        href="/blog"
        className="text-[20px] text-blue-400 active:text-blue-900 text-center block"
      >
        Blog Page
      </Link>
      <Link
        href="/products"
        className="text-[20px] text-blue-400 active:text-blue-900 text-center block"
      >
        Products Page
      </Link>
    </div>
  );
}
