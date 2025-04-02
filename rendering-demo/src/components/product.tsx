import React from "react";

const ProductComponent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <div>ProductComponent</div>;
};

export default ProductComponent;
