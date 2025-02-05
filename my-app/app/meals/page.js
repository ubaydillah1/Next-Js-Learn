import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoading from "./loading-out";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <main>
      <h1 className="font-bold text-[72px] text-center my-10">Meals Page</h1>
      <Suspense fallback={<MealsLoading />}>
        <Meals />
      </Suspense>
    </main>
  );
};

export default MealsPage;
