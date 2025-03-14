import Link from "next/link";

// Example code to extract only make, model, year and trim
fetch(
  "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/1FTFW1ET6DFA37842?format=json"
)
  .then((response) => response.json())
  .then((data) => {
    // Initialize variables
    let make = "";
    let model = "";
    let year = "";
    let trim = "";

    // Extract the needed fields
    data.Results.forEach((item: { Variable: string; Value: string }) => {
      if (item.Variable === "Make") make = item.Value;
      if (item.Variable === "Model") model = item.Value;
      if (item.Variable === "Model Year") year = item.Value;
      if (item.Variable === "Trim") trim = item.Value;
    });

    // Now you have just the data you needed
    console.log({
      make: make,
      model: model,
      year: year,
      trim: trim,
    });
  });

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
