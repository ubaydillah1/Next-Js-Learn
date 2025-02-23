import NewsList from "@/src/components/lists";
import { getLatestNews } from "@/src/lib/news";

const DefaultLatest = () => {
  const latestNews = getLatestNews();
  return (
    <div>
      <h1>Latest News</h1>
      <div>
        <NewsList news={latestNews} />
      </div>
    </div>
  );
};

export default DefaultLatest;
