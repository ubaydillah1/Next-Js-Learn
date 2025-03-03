import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return {
    title: `Product Iphone ${(await params).productId}`,
  };
};

type Props = {
  params: {
    productId: string;
  };
};

const DetailProductPage = ({ params }: Props) => {
  const productId = params.productId;
  return <div>Product {productId}</div>;
};

export default DetailProductPage;
