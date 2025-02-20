import Link from "next/link";
import { DUMMY_NEWS } from "../../../../dummy-news";
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {
  const { slug } = await params;

  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-red-500">
          Berita Tidak Ditemukan
        </h1>
        <p className="text-lg text-gray-500">
          Silakan kembali ke halaman utama.
        </p>
      </div>
    );
  }

  return (
    <article className="flex flex-col items-center p-6 max-w-4xl mx-auto min-h-screen text-white">
      <header>
        <h1 className="text-4xl font-bold text-center mb-4">
          {newsItem.title}
        </h1>
        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </header>
      <p className="mt-6 text-lg text-justify">{newsItem.content}</p>
      <p className="mt-4 text-gray-500 italic text-sm">
        Dipublikasikan pada: {newsItem.date}
      </p>
      <Link
        href="/news"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Kembali ke Berita
      </Link>
    </article>
  );
};

export default NewsDetailPage;
