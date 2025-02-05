import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

const MealsDetailPage = async ({ params }) => {
  const { slug } = await params;

  const meal = await getMeal(slug);
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="Images"
            src={meal.image}
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealsDetailPage;
