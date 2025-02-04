import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const MealsPage = async () => {
  const meals = await getMeals();

  return (
    <main>
      <h1 className="font-bold text-[72px] text-center my-10">Meals Page</h1>
      <MealsGrid meals={meals} />
    </main>
  );
};

export default MealsPage;
