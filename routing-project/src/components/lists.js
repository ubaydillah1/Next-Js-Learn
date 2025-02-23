import Image from "next/image";
import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-6xl my-8 px-4">
      {news.map((newsItem) => {
        return (
          <li
            key={newsItem.key}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <Link href={`/news/${newsItem.slug}`} className="block">
              <div className="relative w-full h-64">
                <Image
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-lg font-semibold text-gray-900">
                {newsItem.title}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
