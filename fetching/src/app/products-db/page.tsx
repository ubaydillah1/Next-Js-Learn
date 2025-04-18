import { getProducts } from "@/prisma-db";
import ProductDetail from "./product-detail";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDBPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return (
    <div>
      <ProductDetail products={products} />
    </div>
  );
};

export default ProductsDBPage;
