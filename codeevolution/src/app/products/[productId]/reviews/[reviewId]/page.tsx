const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
};

export default ProductReview;
