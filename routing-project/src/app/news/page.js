import { DUMMY_NEWS } from "../../../dummy-news";
import NewsList from "@/src/components/lists";

const NewsPage = () => {
  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-4xl md:text-[58px]">News Page</h1>

      <NewsList news={DUMMY_NEWS} />
    </div>
  );
};

export default NewsPage;
