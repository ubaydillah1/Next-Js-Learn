import { getProducts } from "@/prisma-db";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDBPage = async () => {
  const products: Product[] = await getProducts();

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-xl p-4">
              <h2 className="text-xl font-semibold mb-2 text-black">
                {product.title}
              </h2>
              <p className="text-gray-600">
                {product.description || "No description available"}
              </p>
              <p className="text-lg font-bold mt-3 text-blue-600">
                ${product.price.toFixed(2)}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDBPage;
