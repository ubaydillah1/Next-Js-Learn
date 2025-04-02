export const dynamicParams = true;

export async function generateStaticParams() {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];
}

const ProductsDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div>
      <h1>
        Product {id} details rendered at {new Date().toLocaleTimeString()}
      </h1>
    </div>
  );
};

export default ProductsDetail;
