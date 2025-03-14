import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> => {
  const resolvedParams = await params;

  if (!resolvedParams?.productId) {
    throw new Error("Missing productId in params");
  }

  return {
    title: `Product iPhone ${resolvedParams.productId}`,
  };
};

const DetailProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const resolvedParams = await params;
  return <div>Product {resolvedParams.productId} haloha</div>;
};

export default DetailProductPage;
