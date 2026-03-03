"use client";

import { Products } from "@/lib/types/types";

interface ProductDetailsClientProps {
  product: Products;
}

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  console.log("Product details client received product:", product);
  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {product.id}</p>
    </>
  );
}
