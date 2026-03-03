"use client";

import { Products } from "@/lib/types/types";
import ProductListItem from "./ProductListItem";

interface ProductListProps {
  products: Products[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <>
      <section>
        <h1>Welcome to the Online Shop!</h1>

        <p>Explore our wide range of products and enjoy shopping with us.</p>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
