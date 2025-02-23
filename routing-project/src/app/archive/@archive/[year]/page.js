import NewsList from "@/src/components/lists";
import { getNewsForYear } from "@/src/lib/news";

const FilteredNewsPage = async ({ params }) => {
  const { year } = await params;
  const news = getNewsForYear(year);

  return (
    <div>
      <div>
        <NewsList news={news} />
      </div>
    </div>
  );
};

export default FilteredNewsPage;
