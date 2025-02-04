import React from "react";
import MealItem from "./meal-item";

const MealsGrid = ({ meals }) => {
  return (
    <div className="grid grid-cols-4 gap-8 p-4 bg-red-200 my-10 rounded-[20px]">
      {meals.map((meal) => {
        return (
          <div key={meal.id} className="shadow-lg rounded-lg">
            <MealItem {...meal} />
          </div>
        );
      })}
    </div>
  );
};

export default MealsGrid;
