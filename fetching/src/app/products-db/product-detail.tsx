/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { removeProduct } from "@/actions/products";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { useOptimistic } from "react";
import Form from "next/form";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductDetail = ({ products }: { products: Product[] }) => {
  const router = useRouter();

  const [opstimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) =>
      currentProducts.filter((p) => p.id !== productId)
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);

    const toastId = toast.loading("Deleting...");

    try {
      await removeProduct(productId);
      toast.success("Product deleted successfully!", { id: toastId });
      router.push("/products-db");
    } catch (error) {
      console.log("error", (error as Error).message);
      toast.error("Failed to delete product.", { id: toastId });
    }
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>

        {opstimisticProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {opstimisticProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-xl p-4"
              >
                <h2 className="text-xl font-semibold mb-2 text-black">
                  {product.title}
                </h2>
                <p className="text-gray-600">
                  {product.description || "No description available"}
                </p>
                <p className="text-lg font-bold mt-3 text-blue-600">
                  ${product.price.toFixed(2)}
                </p>
                <Link
                  href={`/products-db/${product.id}`}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  View Details
                </Link>

                <Form action={removeProductById.bind(null, product.id)}>
                  <button
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-600 transition"
                    type="submit"
                  >
                    Delete Button
                  </button>
                </Form>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
