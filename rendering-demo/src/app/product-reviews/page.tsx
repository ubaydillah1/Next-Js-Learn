import ProductComponent from "@/components/product";
import ReviewsComponent from "@/components/reviews";
import { Suspense } from "react";
import React from "react";

export const dynamic = "force-dynamic";

const ProductReviewsPage = () => {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading Product....</p>}>
        <ProductComponent />
      </Suspense>
      <Suspense fallback={<p>Loading Review ....</p>}>
        <ReviewsComponent />
      </Suspense>
    </div>
  );
};

export default ProductReviewsPage;
