"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductReview = () => {
  const params = useParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const { productId, reviewId } = params as {
        productId: string;
        reviewId: string;
      };

      if (!productId || !reviewId) {
        throw new Error("Missing parameters");
      }

      if (parseInt(reviewId) === 0 || parseInt(productId) > 100) {
        throw new Error("Review or product not found");
      }

      setLoading(false);
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  }, [params]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
};

export default ProductReview;
