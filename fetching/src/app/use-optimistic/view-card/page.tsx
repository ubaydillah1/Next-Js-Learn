import { getProducts } from "@/prisma-db";
import FormProduct from "./formProduct";

const ViewProducts = async () => {
  const products = await getProducts();
  return <FormProduct products={products} />;
};

export default ViewProducts;
