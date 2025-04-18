import Form from "next/form";

const Search = () => {
  return (
    <Form action="/products-db">
      <div className="max-w-lg mx-auto p-4">
        <div className="flex items-center space-x-4 border-2 border-gray-300 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <input
            type="text"
            name="query"
            placeholder="Search here..."
            className="flex-grow p-2 bg-transparent text-white focus:outline-none placeholder-gray-500 rounded-lg"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Search;

// import Form from "next/form";

// export default function Page() {
//   return (
//     <Form action="/products-db" className="flex gap-2">
//       <input
//         name="query"
//         className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
//         placeholder="Search products"
//       />
//       <button
//         type="submit"
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//       >
//         Submit
//       </button>
//     </Form>
//   );
// }
