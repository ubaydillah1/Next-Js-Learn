"use client";

import Link from "next/link";
import { Product } from "@prisma/client";
import { useOptimistic } from "react";
import { removeProduct } from "@/actions/products";

const FormProduct = ({ products }: { products: Product[] }) => {
  const [productsOptimistic, setProductsOptimistic] = useOptimistic(
    products,
    (currentProducts: Product[], productId: number): Product[] => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const deleteProductById = async (id: number) => {
    setProductsOptimistic(id);
    await removeProduct(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {productsOptimistic.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                {product.description || "No description available."}
              </p>
              <div className="text-lg font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </div>
            </div>
            <div className="w-full text-center">
              <Link
                href={`/use-optimistic/update/${product.id}`}
                className="p-3 bg-blue-700 text-white inline-block mx-auto"
              >
                View Detail
              </Link>
            </div>
            <form action={deleteProductById.bind(null, product.id)}>
              <button
                className="p-3 bg-red-700 text-white font-bold"
                type="submit"
              >
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormProduct;
